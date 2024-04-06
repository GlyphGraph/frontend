import map from "./../../assets/World Map Pattern.png";
import { Button } from "@nextui-org/react";
import Globe from "./../../assets/Globe.png";
import bg from "./../../assets/magicpattern-grid-pattern-1712170206583.png";
import style from "./style.module.scss";
import { Link } from "react-router-dom";

import Card from "@components/Carousel";
import React, { useEffect, useRef } from "react";

const Hero = () => {
    return (
        <>
            <div
                className=" h-[100%] flex flex-col gap-3 relative pt-32 pl-10 pb-52"
                style={{
                    backgroundImage: `url(${map})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="pl-6 pt-8">
                    <h1 className="text-4xl pb-5 font-semibold">
                        Forget passwords, unlock the future of logins with{" "}
                        <p className="text-[#ca8a04] font-bold">GlyphGraph.</p>
                    </h1>
                    <h3 className="text-base pb-3 mb-7">
                        Traditional passwords are vulnerable to brute force
                        attacks and data breaches.
                        <br /> Glyph Guard disrupts the status quo by offering a
                        unique graphical password system secured by the power of
                        blockchain technology. <br />
                        Our intuitive platform allows you to generate strong,
                        memorable passwords that are resistant to hacking
                        attempts, giving you complete control over your online
                        security.
                    </h3>
                    <Button
                        radius="full"
                        className="rounded-3xl bg-white text-black p-5 text-lg font-semibold hover:bg-[#ca8a04] hover:text-white transition-all"
                    >
                        <Link to="/register">Join Now</Link>
                    </Button>
                </div>
            </div>

            <div className="pl-3 pr-3 ">
                <div className="pt-6 flex flex-col justify-between items-center">
                    <h1 className="text-3xl font-semibold pb-3">
                        Fast and secure login on any device around the globe
                    </h1>
                    <img
                        src={Globe}
                        className={style["rotate-animation"]}
                    ></img>
                </div>

                <Card />
            </div>
        </>
    );
};

export default Hero;
