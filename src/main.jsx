import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./providers/WalletProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <WalletProvider>
                <NextUIProvider>
                    <main>
                        <App />
                    </main>
                </NextUIProvider>
            </WalletProvider>
        </BrowserRouter>
    </React.StrictMode>
);
