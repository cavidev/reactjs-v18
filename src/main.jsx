import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import App from "./App.jsx";
import "./index.css";
import "primeicons/primeicons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <PrimeReactProvider value={{ unstyled: false }}>
                <App />
            </PrimeReactProvider>
        </BrowserRouter>
    </React.StrictMode>
);
