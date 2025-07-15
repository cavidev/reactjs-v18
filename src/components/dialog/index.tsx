import { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "~/hooks/useClickOutside";
import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

/*
<button onClick={onClose}>x</button>
*/
export const DialogContent = forwardRef<HTMLDivElement, any>(({ onClose, children }, ref) => (
    <div
        ref={ref}
        id="dialog-content"
        data-testid="dialog-content"
        className="w-1/2 h-1/2 overflow-auto rounded bg-surface-light dark:bg-surface-dark flex flex-col p-6"
    >
        {children}
    </div>
));

interface DialogProps {
    isOpen: boolean;
    onClose: Function;
}

export const Dialog: PFC<DialogProps> = ({ isOpen, onClose, children }) => {
    const ref = useRef(null);
    useClickOutside(ref, () => {
        onClose();
    });

    return (
        <Show when={isOpen}>
            {createPortal(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <DialogContent onClose={onClose} ref={ref}>
                        {children}
                    </DialogContent>
                </div>,
                document.getElementById("root")!
            )}
        </Show>
    );
};
