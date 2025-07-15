/// <reference types="vitest/globals" />

import { fireEvent, render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { Dialog } from "./index";

// Mock useClickOutside hook
const mockUseClickOutside = vi.fn();


// 🧩 Mock de matchMedia
beforeAll(() => {
    // Asegura que el root exista ANTES del primer render
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

    vi.mock("~/hooks/useClickOutside", () => ({
        useClickOutside: vi.fn(),
    }));

    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: (query: string) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vi.fn(), // obsoleto pero requerido por compatibilidad
            removeListener: vi.fn(),
            addEventListener: vi.fn(),
            removeEventListener: vi.fn(),
            dispatchEvent: vi.fn(),
        }),
    });

    // 🧩 Mock de portal
    vi.spyOn(ReactDOM, "createPortal").mockImplementation((element: React.ReactNode) => {
        return element as any;
    });

    document.body.innerHTML = '<div id="root"></div>';
});

describe("Dialog functionality", () => {
    const onClose = vi.fn();
    const testContent = <div>Test Dialog Content</div>;

    beforeEach(() => {
        onClose.mockClear();
        mockUseClickOutside.mockClear();
    });

    it("renders dialog when isOpen is true", () => {
        render(
            <Dialog isOpen={true} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        const dialog = screen.getByText("Test Dialog Content");
        expect(dialog).toBeInTheDocument();
        
        const overlay = document.querySelector(".fixed.inset-0.z-50");
        expect(overlay).toBeInTheDocument();
    });

    it("does not render dialog when isOpen is false", () => {
        render(
            <Dialog isOpen={false} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        const dialog = screen.queryByText("Test Dialog Content");
        expect(dialog).not.toBeInTheDocument();
        
        const overlay = document.querySelector(".fixed.inset-0.z-50");
        expect(overlay).not.toBeInTheDocument();
    });

    it("sets up useClickOutside hook correctly", () => {
        render(
            <Dialog isOpen={true} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        expect(mockUseClickOutside).toHaveBeenCalledWith(
            expect.any(Object), // ref
            expect.any(Function) // onClose callback
        );
    });

    it("calls onClose when useClickOutside triggers", () => {
        let clickOutsideCallback: Function | undefined;
        
        mockUseClickOutside.mockImplementation((ref, callback) => {
            clickOutsideCallback = callback;
        });

        render(
            <Dialog isOpen={true} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        // Simulate click outside by calling the callback
        if (clickOutsideCallback) {
            clickOutsideCallback();
        }

        expect(onClose).toHaveBeenCalledTimes(1);
    });

    it("does not close when clicking inside the dialog content", () => {
        let clickOutsideCallback: Function | undefined;
        
        mockUseClickOutside.mockImplementation((ref, callback) => {
            clickOutsideCallback = callback;
        });

        render(
            <Dialog isOpen={true} onClose={onClose}>
                <div data-testid="dialog-content-div">
                    <button>Click me</button>
                </div>
            </Dialog>
        );

        const dialogContent = screen.getByTestId("dialog-content-div");
        fireEvent.click(dialogContent);

        // The callback should not be called when clicking inside
        expect(onClose).not.toHaveBeenCalled();
    });

    it("renders children content correctly", () => {
        const complexContent = (
            <div>
                <h2>Dialog Title</h2>
                <p>This is a paragraph</p>
                <button>Action Button</button>
            </div>
        );

        render(
            <Dialog isOpen={true} onClose={onClose}>
                {complexContent}
            </Dialog>
        );

        expect(screen.getByText("Dialog Title")).toBeInTheDocument();
        expect(screen.getByText("This is a paragraph")).toBeInTheDocument();
        expect(screen.getByText("Action Button")).toBeInTheDocument();
    });

    it("has correct CSS classes for styling", () => {
        render(
            <Dialog isOpen={true} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        const overlay = document.querySelector(".fixed.inset-0.z-50");
        expect(overlay).toHaveClass("fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "bg-white/20", "backdrop-blur-sm");

        const dialogContentElement = document.querySelector(".w-1/2.h-1/2.overflow-auto.rounded");
        expect(dialogContentElement).toHaveClass("w-1/2", "h-1/2", "overflow-auto", "rounded", "bg-surface-light", "dark:bg-surface-dark", "flex", "flex-col", "p-6");
    });

    it("calls onClose function when provided", () => {
        const customOnClose = vi.fn();
        let clickOutsideCallback: Function | undefined;
        
        mockUseClickOutside.mockImplementation((ref, callback) => {
            clickOutsideCallback = callback;
            clickOutsideCallback()
        });
        
        render(
            <Dialog isOpen={true} onClose={customOnClose}>
                {testContent}
            </Dialog>
        );

        // Simulate click outside
        if (clickOutsideCallback) {
            clickOutsideCallback();
        }

        expect(customOnClose).toHaveBeenCalledTimes(1);
    });

    it("renders with backdrop blur effect", () => {
        render(
            <Dialog isOpen={true} onClose={onClose}>
                {testContent}
            </Dialog>
        );

        const overlay = document.querySelector(".backdrop-blur-sm");
        expect(overlay).toBeInTheDocument();
    });
}); 