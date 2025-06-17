// lib/utilsjsx
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: clsx.ClassValue[]) {
    return twMerge(clsx(inputs));
}

import { PropsWithChildren } from "react";

export type PFC<P = {}> = (props: PropsWithChildren<P>) => React.ReactNode;
