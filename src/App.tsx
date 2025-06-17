import Weather from "modules/weather/Weather";
import { Route, Routes } from "react-router-dom";
import { Home } from "~/modules/home";
import { Layout } from "./Layout";

import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Experience } from "./modules/experiance";
import { TodoApp } from "./modules/TodoApp";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="todo" element={<TodoApp />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
