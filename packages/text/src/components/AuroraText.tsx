import React, { FC, memo } from "react";

export interface AuroraTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    speed?: number;
}

const AuroraTextComponent: FC<AuroraTextProps> = ({
    children,
    className = "",
    colors = ["#457F8C", "#5FA8AF", "#A2D7DB80", "#457F8C"],
    speed = 1,
}) => {
    const gradientStyle = {
        backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animationDuration: `${10 / speed}s`,
        // animation: `gradientShift ${10 / speed}s ease infinite`,
    };

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="sr-only">{children}</span>
            <span
                className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
                style={gradientStyle}
                aria-hidden="true"
            >
                {children}
            </span>
        </span>
    );
};

export const AuroraText = memo(AuroraTextComponent) as FC<AuroraTextProps>;
AuroraText.displayName = "AuroraText";
