import { forwardRef, useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "~/hooks/useClickOutside";
import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

export const DialogContent = forwardRef<HTMLDivElement, any>(({ onClose, children }, ref) => (
    <div ref={ref} className="w-1/2 h-1/2 rounded bg-heading-dark flex flex-col">
        <button onClick={onClose}>x</button>
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
                <dialog
                    open
                    className="backdrop-blur-sm bg-white/30 z-10 flex justify-center items-center w-full h-dvh"
                >
                    <DialogContent onClose={onClose} ref={ref}>
                        {children}
                    </DialogContent>
                </dialog>,
                document.getElementById("layout")!
            )}
        </Show>
    );
};
