import React from "react";
import { Button, ButtonProps } from ".";

interface IconButtonProps extends ButtonProps {
    svg: React.ReactNode;
    label?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ svg, label, ...props }) => (
    <Button type="button" {...props} style={{ display: "flex", alignItems: "center", gap: 8, ...props.style }}>
        {svg}
        {label && <span>{label}</span>}
    </Button>
);

export default IconButton;
/*
        <svg
            width={100}
            height={100}
            viewBox="0 0 16 16"
            fill="#000000"
            className="bi bi-three-dots-vertical"
            transform="rotate(90)"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

            <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />{" "}
            </g>
        </svg>

*/
