import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "~/hooks/useClickOutside";
import Show from "~/lib/Show/Show";
import { PFC } from "~/lib/utils";

interface DrawerProps {
    isOpen: boolean;
    title?: string;
    onClose: Function;
    position?: "left" | "right";
    size?: "sm" | "md" | "lg" | "full";
    preventScroll?: boolean;
}

/**
 * Enhanced Drawer Component
 * 
 * Features:
 * - Smooth spring animations with reduced motion support
 * - Full accessibility (ARIA labels, keyboard navigation, focus management)
 * - Mobile-optimized with responsive design
 * - Configurable position (left/right) and size
 * - Body scroll prevention
 * - Escape key support
 * - Custom scrollbar styling
 * 
 * Usage:
 * ```tsx
 * <Drawer 
 *   isOpen={isOpen} 
 *   onClose={() => setIsOpen(false)}
 *   title="Settings"
 *   position="right"
 *   size="md"
 * >
 *   <div>Your content here</div>
 * </Drawer>
 * ```
 */
export const Drawer: PFC<DrawerProps> = ({ 
    isOpen, 
    onClose, 
    title, 
    children, 
    position = "right",
    size = "md",
    preventScroll = true 
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isReducedMotion, setIsReducedMotion] = useState(false);

    // Check for reduced motion preference
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setIsReducedMotion(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsReducedMotion(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (preventScroll && isOpen) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "unset";
            };
        }
    }, [isOpen, preventScroll]);

    // Handle escape key
    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === "Escape" && isOpen) {
            onClose();
        }
    }, [isOpen, onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            return () => document.removeEventListener("keydown", handleKeyDown);
        }
    }, [isOpen, handleKeyDown]);

    useClickOutside(ref, () => {
        onClose();
    });

    // Focus management
    useEffect(() => {
        if (isOpen && ref.current) {
            const focusableElements = ref.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );
            const firstElement = focusableElements[0] as HTMLElement;
            if (firstElement) {
                firstElement.focus();
            }
        }
    }, [isOpen]);

    // Size classes
    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        full: "max-w-full"
    };

    // Position classes
    const positionClasses = {
        left: {
            container: "left-0",
            initial: { x: "-100%" },
            animate: { x: 0 },
            exit: { x: "-100%" }
        },
        right: {
            container: "right-0",
            initial: { x: "100%" },
            animate: { x: 0 },
            exit: { x: "100%" }
        }
    };

    const currentPosition = positionClasses[position];

    // Optimized animations
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: isReducedMotion ? 0 : 0.2,
                ease: "easeOut"
            }
        },
        exit: { 
            opacity: 0,
            transition: { 
                duration: isReducedMotion ? 0 : 0.15,
                ease: "easeIn"
            }
        }
    };

    const drawerVariants = {
        hidden: currentPosition.initial,
        visible: {
            ...currentPosition.animate,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: isReducedMotion ? 0 : 0.3
            }
        },
        exit: {
            ...currentPosition.exit,
            transition: {
                type: "spring",
                damping: 25,
                stiffness: 300,
                duration: isReducedMotion ? 0 : 0.25
            }
        }
    };

    return createPortal(
        <AnimatePresence mode="wait">
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 z-50 backdrop-blur-sm bg-black/20 dark:bg-black/40"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => onClose()}
                        aria-hidden="true"
                    />
                    
                    {/* Drawer */}
                    <motion.div
                        ref={ref}
                        className={`bg-surface-light dark:bg-surface-dark fixed ${currentPosition.container} top-0 z-50 h-full w-full ${sizeClasses[size]} shadow-2xl flex flex-col transition-colors text-textColor-light dark:text-textColor-dark drawer-mobile`}
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={title ? "drawer-title" : undefined}
                        aria-describedby="drawer-content"
                    >
                        {/* Header */}
                        <Show when={title} keyed key={1}>
                            <div className="flex items-center justify-between px-4 py-4 sm:px-6 border-b border-gray-200 dark:border-gray-700">
                                <h2 className="text-lg font-semibold" id="drawer-title">
                                    {title}
                                </h2>
                                <button
                                    data-testId="close-drawer"
                                    id="close-drawer"   
                                    onClick={() => onClose()}
                                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                                    aria-label="Close drawer"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </Show>
                        
                        {/* Content */}
                        <div 
                            className="relative flex-1 px-4 sm:px-6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent"
                            id="drawer-content"
                        >
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.getElementById("root")!
    );
};

