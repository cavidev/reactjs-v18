import clsx from "clsx";
import { FC, useState } from "react";
import { useTheme } from "~/contexts/ThemeContext";
import For from "~/lib/For/For";
import { Button } from "../button";
import IconButton from "../button/IconButton";
import { Drawer } from "../drawer";
import Hour from "../hour";
import { Toggle } from "../toggle";
import { MenuItem } from "./interfaces";

interface NavbarProps {
    className?: string;
    items: MenuItem[];
}
export const Navbar: FC<NavbarProps> = ({ items, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { setTheme } = useTheme();

    return (
        <>
            <nav className={clsx(className)} aria-label="Top">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="block size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                <svg
                                    className="hidden size-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center ">
                                <img className="h-8 w-auto rounded" src="me.png" alt="Cavidev" />
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <For each={items}>
                                        {(item) => {
                                            return (
                                                <Button
                                                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-ac hover:text-white"
                                                    label={item.label}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        item.command?.();
                                                    }}
                                                ></Button>
                                            );
                                        }}
                                    </For>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Hour />
                            <IconButton
                                size={"small"}
                                svg={
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
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
                                }
                                className=""
                                onClick={() => setIsOpen(true)}
                            />
                        </div>
                    </div>
                </div>

                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <a
                            href="#"
                            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                        >
                            Calendar
                        </a>
                    </div>
                </div>
            </nav>
            <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex flex-col p-2 gap-1">
                    <label>Select Theme</label>
                    <Toggle
                        className="self-end"
                        onChange={() => {
                            setTheme((prev) => {
                                if (prev === "light") {
                                    return "dark";
                                }
                                return "light";
                            });
                        }}
                    ></Toggle>
                </div>
            </Drawer>
        </>
    );
};
