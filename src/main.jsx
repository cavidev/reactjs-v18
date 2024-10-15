import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "primeicons/primeicons.css";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <PrimeReactProvider value={{ unstyled: true, pt: Tailwind, ripple: true }}>
                <App />
            </PrimeReactProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
