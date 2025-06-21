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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setTheme } = useTheme();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

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
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={clsx("block size-6", isMobileMenuOpen && "hidden")}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                <svg
                                    className={clsx("hidden size-6", isMobileMenuOpen && "block")}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    data-slot="icon"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex shrink-0 items-center">
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
                            <div className="hidden sm:block">
                                <Hour />
                            </div>
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
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
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

                {/* Mobile menu */}
                <div className={clsx("sm:hidden", isMobileMenuOpen ? "block" : "hidden")} id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                        <For each={items}>
                            {(item) => {
                                return (
                                    <button
                                        key={item.label}
                                        className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            item.command?.();
                                            setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.label}
                                    </button>
                                );
                            }}
                        </For>
                        <div className="flex items-center justify-between px-3 py-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                            <Toggle
                                onChange={() => {
                                    setTheme((prev) => {
                                        if (prev === "light") {
                                            return "dark";
                                        }
                                        return "light";
                                    });
                                }}
                            />
                        </div>
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
