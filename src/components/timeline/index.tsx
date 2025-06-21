import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import For from "~/lib/For/For";
import IconButton from "../button/IconButton";
import { Chip } from "../chip";
import { useTimelineAnimation } from "./hooks/useTimelineAnimation";

type TimelineItem = {
    id?: string | undefined;
    company: string;
    description?: string;
    date?: string;
    tecnologies: string[];
    resume?: string[];
};

type TimelineProps = {
    items: TimelineItem[];
    onClick: (index: number) => void;
    autoAnimate?: boolean;
    animationDelay?: number;
    enableIntersectionObserver?: boolean;
};

const TimelineItem: React.FC<{
    item: TimelineItem;
    index: number;
    onClick: (index: number) => void;
    isVisible: boolean;
    animationDelay: number;
}> = ({ item, index, onClick, isVisible, animationDelay }) => {
    const [isHovered, setIsHovered] = useState(false);

    const itemVariants = {
        hidden: {
            opacity: 0,
            x: -30,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: animationDelay,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
        hover: {
            scale: 1.01,
            transition: {
                duration: 0.2,
            },
        },
    };

    const dotVariants = {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.3,
                delay: animationDelay + 0.1,
                ease: "backOut",
            },
        },
        pulse: {
            scale: [1, 1.1, 1],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const lineVariants = {
        hidden: {
            height: 0,
        },
        visible: {
            height: "100%",
            transition: {
                duration: 0.6,
                delay: animationDelay + 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            whileHover="hover"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative mb-4 group"
        >
            {/* Timeline dot */}
            <motion.div
                variants={dotVariants}
                animate={isHovered ? "pulse" : "visible"}
                className="absolute left-[-20px] top-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md"
                style={{
                    boxShadow: "0 0 0 1px #1976d2, 0 2px 4px rgba(0,0,0,0.1)",
                }}
                aria-hidden="true"
            />

            {/* Content */}
            <motion.div
                className="flex flex-col gap-2 p-3 bg-white dark:bg-gray-800 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                layout
            >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-200 line-clamp-1">
                        {item.company}
                    </h3>
                    {item.date && (
                        <time
                            className="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap"
                            dateTime={item.date}
                        >
                            {item.date}
                        </time>
                    )}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1">
                    {item.tecnologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: animationDelay + 0.4 + techIndex * 0.05,
                                duration: 0.2,
                            }}
                        >
                            <Chip
                                className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors duration-200 text-xs"
                                size="small"
                                label={tech}
                            />
                        </motion.div>
                    ))}
                    {item.tecnologies.length > 4 && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 px-1">
                            +{item.tecnologies.length - 4}
                        </span>
                    )}
                </div>

                {/* Description */}
                {item.description && (
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: animationDelay + 0.6,
                            duration: 0.3,
                        }}
                        className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-2"
                    >
                        {item.description}
                    </motion.p>
                )}

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: animationDelay + 0.8,
                        duration: 0.3,
                    }}
                    className="flex justify-end"
                >
                    <IconButton
                        label={`View details for ${item.company}`}
                        size="small"
                        onClick={() => onClick(index)}
                        className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 text-xs"
                        svg={
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                            >
                                <path
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        }
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const Timeline: React.FC<TimelineProps> = ({ 
    items, 
    onClick, 
    autoAnimate = true, 
    animationDelay = 0.2,
    enableIntersectionObserver = true,
}) => {
    const {
        visibleItems,
        isInitialized,
        isAnimating,
        timelineRef,
        resetAnimation,
        triggerItem,
    } = useTimelineAnimation({
        itemsCount: items.length,
        autoAnimate,
        animationDelay,
        enableIntersectionObserver,
    });

    return (
        <div 
            ref={timelineRef}
            className="relative max-w-full"
            role="region"
            aria-label="Professional timeline"
        >
            {/* Animation status indicator */}
            {isAnimating && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute top-0 right-0 z-10 px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                >
                    Animating...
                </motion.div>
            )}

            {/* Main timeline line */}
            <div 
                className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-blue-600"
                aria-hidden="true"
            />

            <div className="pl-6">
                <AnimatePresence>
                    <For each={items}>
                        {(item, index) => (
                            <div key={item.id || index} data-index={index}>
                                <TimelineItem
                                    item={item}
                                    index={index}
                                    onClick={onClick}
                                    isVisible={visibleItems.includes(index)}
                                    animationDelay={index * animationDelay}
                                />
                            </div>
                        )}
                    </For>
                </AnimatePresence>

            </div>
        </div>
    );
};

export default Timeline;
