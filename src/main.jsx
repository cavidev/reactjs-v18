import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "primeicons/primeicons.css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <PrimeReactProvider value={{ unstyled: false }}>
                    <App />
                </PrimeReactProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
