import React, { useState } from "react";
import "./style.module.scss";

const TextArea = (props) => {
    const [site, setSite] = useState(props?.site || "Some site");
    const [mail, setMail] = useState(props?.mail || "test@gmail.com");

    if (props.site) {
        setSite(props.site);
    }
    if (props.mail) {
        setMail(props.mail);
    }

    return (
        <div className="flex flex-col p-[8px]  border border-gray-600 m-10 rounded-xl shadow-[0px_0px_5px_rgba(255,255,255,0.5)] hover:shadow-[0px_0px_5px_rgba(255,255,255,1)]">
            <h1 className="pl-[4px]">{site}</h1>
            <p className="text-gray-500 text-[13px] pl-[4px]">{mail}</p>
        </div>
    );
};

export default TextArea;
