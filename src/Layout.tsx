import clsx from "clsx";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Outlet, useNavigate } from "react-router-dom";
import { Switch } from "./components/Switch";
import { useTheme } from "./contexts/ThemeContext";

export const Layout = () => {
    const navigate = useNavigate();
    const context = useTheme();

    const items: MenuItem[] = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => navigate("/"),
            className:
                "bg-navbar-light dark:bg-navbar-dark dark:hover:bg-opacity-20 dark:hover:bg-transparent rounded-none",
        },
        {
            label: "Experience",
            icon: "pi pi-book",
            command: () => navigate("/experience"),
            className:
                "bg-navbar-light dark:bg-navbar-dark dark:hover:bg-opacity-20 dark:hover:bg-transparent rounded-none",
        },
        /*{
            label: "Weather",
            icon: "pi pi-cloud",
            command: () => navigate("/weather"),
        },
        {
            label: "Tasks",
            icon: "pi pi-list",
            command: () => navigate("/tasks"),
        },*/
    ];

    return (
        <div
            id="layout"
            className={clsx(
                "bg-background-light dark:bg-background-dark flex-col flex h-full w-full transition-colors"
            )}
        >
            <div className="px-28 py-4">
                <Menubar
                    className="flex ul:bg-navbar-light bg-navbar-light dark:bg-navbar-dark border-none"
                    model={items}
                    end={
                        <Switch
                            title="Change theme"
                            checked={!(context.theme === "light")}
                            onChange={(e) => {
                                context.setTheme((prev) => (prev === "light" ? "dark" : "light"));
                            }}
                        />
                    }
                ></Menubar>
            </div>
            <div className="flex flex-row w-full h-screen px-24">
                <Outlet />
            </div>
        </div>
    );
};
