"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import React, { ComponentPropsWithoutRef, useEffect, useMemo, useState } from "react";
import { cn } from "~/lib/utils";
import For from "../../../lib/For/For";

export function AnimatedListItem({ children, classname }: { children: React.ReactNode; classname?: string }) {
    const animations = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1, originY: 0 },
        exit: { scale: 0, opacity: 0 },
        transition: { type: "spring", stiffness: 350, damping: 40 },
    };

    return (
        <motion.div {...animations} layout className={clsx("mx-auto w-full", classname)}>
            {children}
        </motion.div>
    );
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    delay?: number;
}

export const AnimatedList = React.memo(({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = useMemo(() => React.Children.toArray(children), [children]);

    useEffect(() => {
        if (index < childrenArray.length - 1) {
            const timeout = setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [index, delay, childrenArray.length]);

    const itemsToShow = useMemo(() => {
        const result = childrenArray.slice(0, index + 1).reverse();
        return result;
    }, [index, childrenArray]);

    // Crear array con IDs únicos para usar con For
    const itemsWithIds = useMemo(() => {
        return itemsToShow.map((item, idx) => ({
            id: `animated-item-${idx}-${(item as React.ReactElement).key || idx}`,
            item
        }));
    }, [itemsToShow]);

    return (
        <div className={cn(`flex flex-col items-center gap-4`, className)} {...props}>
            <AnimatePresence>
                <For each={itemsWithIds}>
                    {({ item }) => (
                        <AnimatedListItem key={(item as React.ReactElement).key}>
                            {item}
                        </AnimatedListItem>
                    )}
                </For>
            </AnimatePresence>
        </div>
    );
});

AnimatedList.displayName = "AnimatedList";
