import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {
    const navigate = useNavigate();
    const items: MenuItem[] = [
        {
            label: "Home",
            icon: "pi pi-home",
            command: () => navigate("/"),
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
        <div className="bg-theme-base flex-col flex  h-full w-full">
            <div className="px-28 py-4">
                <Menubar className="flex bg-theme-1 border-none" model={items}></Menubar>
            </div>
            <Outlet />
        </div>
    );
};
