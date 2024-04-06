import React from "react";
import logo from "./../../assets/logo.png";
import Header from "@components/header";
import Hero from "@components/hero";
import { Footer } from "@components/Footer";
const BannerPage = () => {
    return (
        <div className="flex flex-col p-8 h-dvh">
            <Header />
            <Hero />
            <Footer />
        </div>
    );
};

export default BannerPage;
