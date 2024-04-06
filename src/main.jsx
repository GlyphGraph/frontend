import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.scss";
import WalletProvider from "./providers/WalletProvider.jsx";

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
