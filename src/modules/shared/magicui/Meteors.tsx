import React, { useEffect, useState } from "react";
import { cn } from "~/lib/utils";
import For from "../../../lib/For/For";

interface MeteorsProps {
    number?: number;
}

type Style = React.CSSProperties;

type Idx = React.Key | null | undefined;

export const Meteors = ({ number = 20 }: MeteorsProps) => {
    const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);
    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            top: -5,
            left: Math.floor(Math.random() * window.innerWidth) + "px",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
        }));
        setMeteorStyles(styles);
    }, [number]);

    return (
        <>
            <For each={[...meteorStyles]}>
                {(style: Style, idx: Idx) => (
                    // Meteor Head
                    <span
                        key={idx}
                        className={cn(
                            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
                        )}
                        style={style}
                    >
                        {/* Meteor Tail */}
                        <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                    </span>
                )}
            </For>
        </>
    );
};

export default Meteors;

/* {[...meteorStyles].map((style, idx) => (
                // Meteor Head
                <span
                    key={idx}
                    className={clsx(
                        "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
                    )}
                    style={style}
                >
                    {/* Meteor Tail 
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
                </span>
            ))}*/
