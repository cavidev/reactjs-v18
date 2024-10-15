import Weather from "modules/weather/Weather";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import ReactQuery from "./modules/reactquery/ReactQuery";

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
                    <Route path="/reactquery" element={<ReactQuery />} />
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

import { Menubar } from "primereact/menubar";
function Layout() {
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
            label: "React Query",
            url: "/reactquery",
        },
        {
            label: "D3 Graph",
            url: "/graph",
        },
    ];
    return (
        <div className="flex flex-col h-full w-full">
            <Menubar model={items}></Menubar>
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

function Home() {
    return (
        <div>
            <h2>Home</h2>
            add my name here with animation that can change like a module
        </div>
    );
}

// import Examples from "./modules/examples/Examples";

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
