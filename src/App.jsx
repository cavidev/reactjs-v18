import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Weather from "modules/weather/Weather";
import ReactQuery from "modules/reactquery/ReactQuery";
import Examples from "modules/examples/Examples";

function App() {
    return (
        <>
            {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="reactquery" element={<ReactQuery />} />
                    <Route path="examples" element={<Examples />} />

                    {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
                    <Route path="*" element={<NoMatch />} />
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
            label: "Examples",
            url: "/examples",
        },
    ];
    return (
        <div className="flex flex-col h-full">
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

import { Button } from "primereact/button";
function Home() {
    return (
        <div>
            <h2>Home</h2>
            <MaskDemo />
        </div>
    );
}

import React, { useState } from "react";
import { InputOtp } from "primereact/inputotp";
// import Examples from "./modules/examples/Examples";
function MaskDemo() {
    const [token, setTokens] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputOtp value={token} onChange={(e) => setTokens(e.value)} mask />
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
