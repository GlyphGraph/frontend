import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import logo from "./../../assets/Globe.png";
import graph_pass_photo from "./../../assets/graphical-password-phone-tool-svgrepo-com.svg";

export default function App() {
    const list = [
        {
            title: "Generate graphical passwords",
            p: "Quickly generate secure passwords whenever you create a new online account.",
            img: graph_pass_photo,
        },
        {
            title: "Save your password securely here",
            p: " Store and access your login credentials safely here with GlyphGuard",
            img: graph_pass_photo,
        },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 mt-20 gap-8 w-[90%] items-center justify-center ml-auto mr-auto mb-12">
            {list.map((item, index) => (
                <Card shadow="sm" key={index}>
                    <CardBody className="overflow-visible p-6  slate-gray-950 shadow-[0px_0px_10px_15px_rgba(255,255,255,1)] ">
                        <Image
                            shadow="sm"
                            radius="lg"
                            width="100%"
                            alt={item.title}
                            className="w-full object-cover h-[140px]"
                            src={item.img}
                        />
                        <h2 className="text-xl pb-6 pt-3 text-[#4ade80]">
                            {item.title}
                        </h2>
                        <p>{item.p}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
