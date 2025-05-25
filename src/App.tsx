import Weather from "modules/weather/Weather";
import { Home } from "packages/home";
import { Menubar } from "primereact/menubar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Tasks } from "./modules/tasks";

import { MenuItem } from "primereact/menuitem";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/tasks" element={<Tasks />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

const items: MenuItem[] = [
    {
        label: "Home",
        icon: "pi pi-home",
        url: "/reactjs-v18",
    },
    {
        label: "Weather",
        icon: "pi pi-cloud",
        url: "/weather",
    },
    {
        label: "Tasks",
        url: "/reactjs-v18/tasks",
    },
    {
        label: "Worker",
        url: "/reactjs-v18/worker",
    },
];

function Layout() {
    return (
        <div className="bg-theme-base flex-col flex  h-full w-full">
            <div className="px-28 py-4">
                <Menubar className="flex bg-theme-1 border-none" model={items}></Menubar>
            </div>

            <Outlet />

            {/* An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. */}
            {/* <Header /> */}
            {/* <Body /> */}
            {/* <Footer /> */}
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}
