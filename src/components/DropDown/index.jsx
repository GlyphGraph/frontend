import React from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";

export default function DropdownCustome() {
    const items = [
        {
            key: "login",
            label: "Login",
            path: "/new_password",
        },
        {
            key: "password",
            label: "Password",
            path: "/pass_strength",
        },
    ];

    return (
        <div className=" w-[5%] h-dvh flex flex-col gap-8 pt-4 rounded-full pr-2 ">
            <Dropdown className="bg-slate-950 shadow stroke-gray-100 border border-gray-800 ">
                <DropdownTrigger>
                    <Button variant="bordered" className="bg-gray-900">
                        Menu
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dynamic Actions" items={items}>
                    {(item) => (
                        <DropdownItem
                            key={item.key}
                            color={item.key === "delete" ? "danger" : "default"}
                            className={
                                item.key === "delete" ? "text-danger" : ""
                            }
                        >
                            {item.label}
                        </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
