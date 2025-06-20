import clsx from "clsx";
import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { MenuItem } from "./components/navbar/interfaces";

export const Layout = () => {
    const navigate = useNavigate();

    const items: MenuItem[] = useMemo(
        () => [
            {
                id: crypto.randomUUID(),
                label: "Home",
                icon: "pi pi-home",
                command: () => navigate("/"),
                className:
                    "bg-navbar-light dark:bg-navbar-dark dark:hover:bg-opacity-20 dark:hover:bg-transparent rounded-none",
            },
            {
                id: crypto.randomUUID(),
                label: "Experience",
                icon: "pi pi-book",
                command: () => navigate("/experience"),
                className:
                    "bg-navbar-light dark:bg-navbar-dark dark:hover:bg-opacity-20 dark:hover:bg-transparent rounded-none",
            } /*,
            {
                id: crypto.randomUUID(),
                label: "TodoApp",
                icon: "pi pi-list",
                command: () => navigate("/todo"),
            },*/,
        ],
        [navigate]
    );

    return (
        <div
            id="layout"
            className={clsx(
                "h-screen bg-background-light dark:bg-background-dark grid grid-cols-5 grid-rows-6 gap-2 transition-colors text-textColor-light dark:text-textColor-dark "
            )}
        >
            <div className="col-span-5">
                <Navbar items={items}></Navbar>
            </div>
            <div className="col-span-5 row-span-5 row-start-2">
                <Outlet />
            </div>
        </div>
    );
};
