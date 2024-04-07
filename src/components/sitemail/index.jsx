import React, { useState } from "react";

const Sitemail = () => {
    // Destructure `vault` prop for conciseness
    const [userName, setUserName] = useState("");

    const data = [
        [
            "vault",
            "title",
            "username1",
            "password",
            ["websites1", "websites2", "websites1"], // Websites array
            "note",
            "created",
        ],
        [
            "vault",
            "title",
            "username2",
            "password",
            ["websites3", "websites4"], // Another websites array
            "note",
            "created",
        ],
    ];

    console.log(data.map((e) => e[4].map((r1) => [e[2], r1])));
    const transformedData = data.map((item, index) => {
        const username = item[2];
        const websites = item[4];
        const note = item[5]; // Capture note within the map
        const created = item[6]; // Capture created date within the map
        return { username, websites, note, created }; // Create object with all data
    });

    return (
        <div className="flex flex-col gap-2 pt-6 ">
            {transformedData.map((usernameWebsitePair, index) => (
                <div
                    key={index}
                    className="flex flex-col justify-center items-center "
                >
                    {usernameWebsitePair.websites.map(
                        (website, websiteIndex) => (
                            <div
                                key={websiteIndex}
                                className="flex flex-col pb-7 justify-center items-center border-b border-gray-900"
                            >
                                <h2 className="text-xl">
                                    {usernameWebsitePair.username}
                                </h2>
                                <p key={websiteIndex} className="text-lg">
                                    {website}
                                </p>
                            </div>
                        )
                    )}
                </div>
            ))}
        </div>
    );
};

export default Sitemail;
