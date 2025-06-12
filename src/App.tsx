import Weather from "modules/weather/Weather";
import { Route, Routes } from "react-router-dom";
import { Home } from "~/modules/home";
import { Layout } from "./Layout";
import { Tasks } from "./modules/tasks";

import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="tasks" element={<Tasks />} />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
