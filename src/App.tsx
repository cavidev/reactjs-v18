import Weather from "modules/weather/Weather";
import { Home } from "packages/home";
import { Menubar } from "primereact/menubar";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Tasks } from "./modules/tasks";

function App() {
    return (
        <>
            {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/graph" element={<>Please add graph d3 here!</>} />

                    {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                    <Route path="/*" element={<NoMatch />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;

const items = [
    {
        label: "Home",
        icon: "pi pi-home",
        url: "/",
    },
    {
        label: "Weather",
        icon: "pi pi-cloud",
        url: "/weather",
    },
    {
        label: "Tasks",
        url: "/tasks",
    },
    {
        label: "D3 Graph",
        url: "/graph",
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
