import Weather from "modules/weather/Weather";
import { Home } from "packages/home";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Tasks } from "./modules/tasks";

import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="tasks" element={<Tasks />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
