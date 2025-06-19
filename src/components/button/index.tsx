import clsx from "clsx";
import { FC, MouseEventHandler, ReactNode } from "react";

type ButtonSize = "small" | "medium" | "bigger";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    children?: ReactNode;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    size?: ButtonSize;
}

const sizeClasses: Record<ButtonSize, string> = {
    small: "px-2 py-1 text-xs",
    medium: "px-4 py-2 text-base",
    bigger: "px-6 py-3 text-lg",
};

export const Button: FC<ButtonProps> = ({ label, className, children, onClick, size = "medium", ...props }) => {
    return (
        <button
            onClick={(e) => {
                onClick?.(e);
            }}
            className={clsx("rounded", sizeClasses[size], className)}
            {...props}
        >
            {label || children}
        </button>
    );
};
