import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found");
}
ReactDOM.createRoot(rootElement!).render(
    <ThemeProvider>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter basename="/reactjs-v18">
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </ThemeProvider>
);
