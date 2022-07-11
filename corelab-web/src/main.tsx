import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./context/query";
import { Router } from "./routes/router";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider>
                <Router />
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
