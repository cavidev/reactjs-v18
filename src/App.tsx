import { Route, Routes } from "react-router-dom";
import { Home } from "~/pages/home";
import Weather from "~/pages/weather/Weather";
import { Layout } from "./Layout";

import "./App.css";
import { Experience } from "./pages/experiance";
import { TodoApp } from "./pages/TodoApp";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path="experience" element={<Experience />} />
                <Route path="weather" element={<Weather />} />
                <Route path="todo" element={<TodoApp />} />
            </Route>
        </Routes>
    );
}

export default App;
