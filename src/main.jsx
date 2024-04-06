import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import WalletProvider from "./providers/WalletProvider.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_KEY}>
                <WalletProvider>
                    <NextUIProvider>
                        <App />
                    </NextUIProvider>
                </WalletProvider>
            </GoogleOAuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
