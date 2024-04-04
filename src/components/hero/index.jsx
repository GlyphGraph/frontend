import map from "./../../assets/World Map Pattern.png";
import { Button } from "@nextui-org/react";

const Hero = () => {
    return (
        <div
            className=" h-[100%] flex flex-col gap-3 relative pt-[100px]"
            style={{
                backgroundImage: `url(${map})`,
                backgroundSize: "contain",
            }}
        >
            <div className="pl-[25px]">
                <h1 className="text-[30px] pb-5">
                    Forget passwords, unlock the future of logins with{" "}
                    <strong>Glyph Guard.</strong>
                </h1>
                <h3 className="text-[15px] pb-3">
                    Traditional passwords are vulnerable to brute force attacks
                    and data breaches.
                    <br /> Glyph Guard disrupts the status quo by offering a
                    unique graphical password system secured by the power of
                    blockchain technology. <br />
                    Our intuitive platform allows you to generate strong,
                    memorable passwords that are resistant to hacking attempts,
                    giving you complete control over your online security.
                </h3>
                <Button
                    radius="full"
                    className="rounded-[20px] bg-white text-black p-5 "
                >
                    Know More
                </Button>
            </div>
        </div>
    );
};

export default Hero;
