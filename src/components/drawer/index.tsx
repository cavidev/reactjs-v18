import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "~/hooks/useClickOutside";
import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

interface DrawerProps {
    isOpen: boolean;
    title?: string;
    onClose: Function;
}

export const Drawer: PFC<DrawerProps> = ({ isOpen, onClose, title, children }) => {
    const ref = useRef(null);

    useClickOutside(ref, () => {
        onClose();
    });

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 z-50 backdrop-blur-sm bg-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => onClose()}
                    />
                    {/* Drawer */}
                    <motion.div
                        ref={ref}
                        className="bg-surface-light dark:bg-surface-dark fixed right-0 top-0 z-50 h-full w-full max-w-md shadow-2xl flex flex-col transition-colors text-textColor-light dark:text-textColor-dark "
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <Show when={title} keyed key={1}>
                            <div className="px-4 py-6 sm:px-6">
                                <h2 className="text-base font-semibold" id="drawer-title">
                                    {title}
                                </h2>
                            </div>
                        </Show>
                        <div className="relative flex-1 px-4 sm:px-6 overflow-y-auto">{children}</div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.getElementById("root")!
    );
};
/*import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "~/hooks/useClickOutside";
import { PFC } from "~/lib/utils";

interface DrawerProps {
    isOpen: boolean;
    onClose: Function;
}

export const Drawer: PFC<DrawerProps> = ({ isOpen, onClose, children }) => {
    const ref = useRef(null);
    const [mounted, setMounted] = useState(isOpen);
    const [show, setShow] = useState(isOpen);

    useClickOutside(ref, () => {
        onClose();
    });

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            // Permite que el componente se monte antes de activar la animación
            setTimeout(() => setShow(true), 10);
        } else {
            setShow(false);
            // Espera la animación antes de desmontar
            const timeout = setTimeout(() => setMounted(false), 300);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <div className="transition-all">
            <div className="relative z-10" aria-labelledby="drawer-title" role="dialog" aria-modal="true">
                <div
                    className={clsx(
                        "fixed inset-0 bg-gray-500/75 transition-opacity duration-300",
                        show ? "opacity-100" : "opacity-0"
                    )}
                    aria-hidden="true"
                ></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                            <div
                                className={clsx(
                                    "pointer-events-auto relative w-screen max-w-md transform transition-transform duration-300",
                                    show ? "translate-x-0" : "translate-x-full"
                                )}
                            >
                                <div ref={ref} className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <h2 className="text-base font-semibold text-gray-900" id="drawer-title">
                                            Panel title
                                        </h2>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById("root")!
    );
};*/
