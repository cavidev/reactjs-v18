import { useEffect } from "react";

export function useClickOutside(ref: React.RefObject<HTMLElement>, callback: () => void) {
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref, callback]);
}
