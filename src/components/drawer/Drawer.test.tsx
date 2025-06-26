/// <reference types="vitest/globals" />

import { fireEvent, render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import { Drawer } from "./index";

// 🧩 Mock de matchMedia
beforeAll(() => {
    // Asegura que el root exista ANTES del primer render
    const root = document.createElement("div");
    root.setAttribute("id", "root");
    document.body.appendChild(root);

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
        return element as React.ReactPortal;
    });

    document.body.innerHTML = '<div id="root"></div>';
});

describe("Drawer usability", () => {
    const onClose = vi.fn();
    const title = "Test Drawer";
    const content = <button>Focusable Button</button>;

    beforeEach(() => {
        onClose.mockClear();
    });

    it("renders and closes when clicking the overlay", () => {
        render(
            <Drawer isOpen={true} onClose={onClose} title={title}>
                {content}
            </Drawer>
        );

        const overlay = document.querySelector(".fixed.inset-0.z-50");
        expect(overlay).toBeInTheDocument();

        if (overlay) {
            fireEvent.click(overlay);
        }

        expect(onClose).toHaveBeenCalled();
    });

    it("closes when pressing Escape", () => {
        render(
            <Drawer isOpen={true} onClose={onClose} title={title}>
                {content}
            </Drawer>
        );

        fireEvent.keyDown(document, { key: "Escape" });
        expect(onClose).toHaveBeenCalled();
    });

    it("focuses the first focusable element on open", () => {
        render(
            <Drawer isOpen={true} onClose={onClose} title={title}>
                {content}
            </Drawer>
        );

        const button = screen.getByTestId("close-drawer");
        expect(document.activeElement).toBe(button);
    });

    it("has correct ARIA attributes for accessibility", () => {
        render(
            <Drawer isOpen={true} onClose={onClose} title={title}>
                {content}
            </Drawer>
        );

        const dialog = screen.getByRole("dialog");
        expect(dialog).toHaveAttribute("aria-modal", "true");
        expect(dialog).toHaveAttribute("aria-labelledby");
        expect(screen.getByText(title).id).toBe(dialog.getAttribute("aria-labelledby"));
    });
});
