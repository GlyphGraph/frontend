import map from "./../../assets/World Map Pattern.png";
import { Button } from "@nextui-org/react";
import Globe from "./../../assets/Globe.png";
import bg from "./../../assets/magicpattern-grid-pattern-1712170206583.png";
import style from "./style.module.scss";
import Paper from "@mui/material/Paper";
import CarouselWithControls from "@components/Carousel";
import React, { useEffect, useRef } from "react";

const Hero = () => {
    return (
        <>
            <div
                className=" h-[100%] flex flex-col gap-3 relative pt-[120px] pl-[40px] pb-[200px]"
                style={{
                    backgroundImage: `url(${map})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="pl-[25px] pt-[30px]">
                    <h1 className="text-[30px] pb-5">
                        Forget passwords, unlock the future of logins with{" "}
                        <strong className="text-gray-500">GlyphGraph.</strong>
                    </h1>
                    <h3 className="text-[15px] pb-3 mb-7">
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
                        className="rounded-[20px] bg-white text-black p-5 "
                    >
                        Know More
                    </Button>
                </div>
            </div>

            <div className="pl-[10px] pr-[10px] ">
                <div className="pt-[25px] flex flex-col justify-between items-center">
                    <h1 className="text-[30px] font-semibold pb-[10px]">
                        Fast and secure login on any device around the globe
                    </h1>
                    <img
                        src={Globe}
                        className={style["rotate-animation"]}
                    ></img>
                </div>

                <CarouselWithControls />
            </div>
        </>
    );
};

export default Hero;
