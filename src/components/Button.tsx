import clsx from "clsx";
import { FC, ReactNode } from "react";

interface ButtonProps {
    label?: string;
    children: ReactNode;
    className: string;
    onClick?: Function;
}
export const Button: FC<ButtonProps> = ({ label, className, children, onClick }) => {
    return (
        <button
            onClick={(e) => {
                onClick?.();
            }}
            className={clsx("rounded ", className)}
        >
            {label || children}
        </button>
    );
};
