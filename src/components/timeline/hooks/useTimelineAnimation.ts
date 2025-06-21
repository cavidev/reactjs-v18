import { useCallback, useEffect, useRef, useState } from 'react';

interface UseTimelineAnimationProps {
    itemsCount: number;
    autoAnimate?: boolean;
    animationDelay?: number;
    enableIntersectionObserver?: boolean;
}

export const useTimelineAnimation = ({
    itemsCount,
    autoAnimate = true,
    animationDelay = 0.2,
    enableIntersectionObserver = true,
}: UseTimelineAnimationProps) => {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);
    const animationTimeoutRef = useRef<NodeJS.Timeout>();

    // Intersection Observer callback
    const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = parseInt(entry.target.getAttribute('data-index') || '0');
                setVisibleItems(prev => {
                    if (!prev.includes(index)) {
                        return [...prev, index].sort((a, b) => a - b);
                    }
                    return prev;
                });
            }
        });
    }, []);

    // Progressive animation
    const startProgressiveAnimation = useCallback(() => {
        if (!autoAnimate || itemsCount === 0) return;

        setIsAnimating(true);
        setVisibleItems([0]);

        let currentIndex = 1;
        const animateNext = () => {
            if (currentIndex < itemsCount) {
                setVisibleItems(prev => [...prev, currentIndex]);
                currentIndex++;
                animationTimeoutRef.current = setTimeout(animateNext, animationDelay * 1000);
            } else {
                setIsAnimating(false);
            }
        };

        animationTimeoutRef.current = setTimeout(animateNext, 500);
    }, [autoAnimate, itemsCount, animationDelay]);

    // Initialize animations
    useEffect(() => {
        if (!autoAnimate) {
            setVisibleItems(Array.from({ length: itemsCount }, (_, i) => i));
            setIsInitialized(true);
            return;
        }

        setIsInitialized(true);
        startProgressiveAnimation();

        return () => {
            if (animationTimeoutRef.current) {
                clearTimeout(animationTimeoutRef.current);
            }
        };
    }, [autoAnimate, itemsCount, startProgressiveAnimation]);

    // Setup intersection observer
    useEffect(() => {
        if (!timelineRef.current || !enableIntersectionObserver || !autoAnimate) return;

        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        });

        const timelineItems = timelineRef.current.querySelectorAll('[data-index]');
        timelineItems.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, [observerCallback, enableIntersectionObserver, autoAnimate]);

    // Reset animation
    const resetAnimation = useCallback(() => {
        setVisibleItems([]);
        setIsAnimating(false);
        if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
        }
        startProgressiveAnimation();
    }, [startProgressiveAnimation]);

    // Manual trigger for specific item
    const triggerItem = useCallback((index: number) => {
        setVisibleItems(prev => {
            if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b);
            }
            return prev;
        });
    }, []);

    return {
        visibleItems,
        isInitialized,
        isAnimating,
        timelineRef,
        resetAnimation,
        triggerItem,
    };
}; 