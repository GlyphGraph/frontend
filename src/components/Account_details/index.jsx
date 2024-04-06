import React, { useState } from "react";
import { Input } from "@nextui-org/react";

const AccountDertails = (props) => {
    const [site, setSite] = useState(props?.site || "account.google.com");
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h1 className="mb-5">{site}</h1>
                </div>
                <div className="flex flex-col gap-5">
                    <Input
                        isDisabled
                        type="email"
                        label="Email"
                        defaultValue={props?.email || "junior@nextui.org"}
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled
                        type="password"
                        label="Password"
                        defaultValue={props?.password || "password"}
                        className="max-w-xs"
                    />
                    <Input
                        isDisabled
                        type="email"
                        label="Email"
                        defaultValue={props?.email || "junior@nextui.org"}
                        className="max-w-xs"
                    />
                </div>
            </div>
        </div>
    );
};

export default AccountDertails;
