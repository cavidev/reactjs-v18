import React from "react";

type ChipSize = "small" | "medium" | "big";

const sizeStyles: Record<ChipSize, React.CSSProperties> = {
    small: {
        fontSize: "0.75em",
        padding: "0.1em 0.5em",
        borderRadius: "12px",
        height: "1.4em",
    },
    medium: {
        fontSize: "0.95em",
        padding: "0.25em 0.75em",
        borderRadius: "16px",
        height: "2em",
    },
    big: {
        fontSize: "1.15em",
        padding: "0.4em 1.2em",
        borderRadius: "20px",
        height: "2.5em",
    },
};

type ChipProps = {
    label: string;
    icon?: React.ReactNode;
    className?: string;
    size?: ChipSize;
};

export const Chip: React.FC<ChipProps> = ({ label, icon, className, size = "medium" }) => (
    <span
        className={`chip ${className ?? ""} chip--${size}
        `}
        style={{
            display: "inline-flex",
            alignItems: "center",
            gap: icon ? "0.5em" : 0,
            ...sizeStyles[size],
        }}
    >
        {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
        <span>{label}</span>
    </span>
);
