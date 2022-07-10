import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ModalProvider } from "./context/modal";
import { QueryProvider } from "./context/query";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ModalProvider>
            <QueryProvider>
                <App />
            </QueryProvider>
        </ModalProvider>
    </React.StrictMode>,
);
