import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/modal";
import { QueryProvider } from "./context/query";
import { Router } from "./routes/router";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <QueryProvider>
                    <Router />
                </QueryProvider>
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
