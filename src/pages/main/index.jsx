import longLogo from "@assets/logo.png";
import { EyeFilledIcon } from "@components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@components/EyeSlashFilledIcon";
import { useAuth } from "@context/auth";
import AddIcon from "@mui/icons-material/Add";
import { Button, Image, Input } from "@nextui-org/react";
import { createContext, useState } from "react";
import useSWR from "swr";
import Dropdown from "./../../components/DropDown";
import { SearchIcon } from "./../../components/searchIcon";

const MainPage = () => {
    const [isVisible, setIsVisible] = useState(-1);

    const { auth } = useAuth();
    const { data_ } = useSWR(
        "getUserVaults",
        async () => await auth?.contract?.getUserVaults()
    );
    const data = [
        [
            "vault",
            "title",
            "username1",
            "password",
            ["websites1", "websites2", "websites1"], // Websites array
            "note1",
            "created1",
        ],
        [
            "vault",
            "title",
            "username2",
            "password",
            ["websites3", "websites4"], // Another websites array
            "note1",
            "created1",
        ],
    ];
    // const transformedData = data.map((item, index) => {
    //     const username = item[2];
    //     const websites = item[4];
    //     const note = item[5]; // Capture note within the map
    //     const created = item[6]; // Capture created date within the map
    //     return { username, websites, note, created }; // Create object with all data
    // });

    // console.log("ssdhvcsiljdc");

    // console.log(transformedData);

    return (
        <div className="flex flex-row ">
            <div className="bg-slate-950 w-[15%] h-dvh flex flex-col gap-8">
                <div className="flex flex-row justify-start items-center pl-4 pt-4">
                    <Image
                        src={longLogo}
                        className="bg-inherit w-14 self-center"
                    />
                </div>
                <div className="px-3 pl-4">
                    <div className="flex flex-row justify-between py-2 hover:bg-color-slate-900 items-center">
                        Vaults
                        <Button isIconOnly size="sm" variant="light">
                            <AddIcon fontSize="small" />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="w-[100%] justify-center px-4 pt-2  h-5">
                <div className="flex w-full gap-2 h-14">
                    <Input
                        isClearable
                        radius="lg"
                        classNames=""
                        placeholder="Type to search..."
                        startContent={<SearchIcon className="max-w[80%]" />}
                    />
                    <Dropdown />
                </div>
                {/* <div className="grid grid-cols-2 gap-2 h-vh">
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
                                            <p
                                                key={websiteIndex}
                                                className="text-lg"
                                            >
                                                {website}
                                            </p>
                                            <p>
                                                Note: {usernameWebsitePair.note}
                                            </p>
                                            <p>
                                                Created:{" "}
                                                {usernameWebsitePair.created}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>
                        ))}
                    </div>
                </div> */}
                <div className="flex flex-col gap-3 p-9">
                    {data.map((e, index) => (
                        <div
                            key={index}
                            className="w-full flex flex-col gap-4 pb-5 "
                        >
                            <div className="border border-gray-700 p-5 flex flex-col rounded-lg bg-stone-900">
                                <div className="flex justify-between items-center gap-2">
                                    <div className="w-[50%] border border-gray-800 rounded-xl p-2 flex pl-2 bg-stone-800">
                                        Username: {e[2]}
                                    </div>

                                    <div className="w-[50%] border border-gray-800 rounded-xl p-2 flex pl-2 bg-stone-800">
                                        Title: {e[2]}
                                    </div>
                                </div>
                                <div>
                                    <div className="border border-gray-700 p-2 flex justify-between rounded-xl mt-2 bg-stone-800">
                                        Password:{" "}
                                        {isVisible === index
                                            ? e[3]
                                            : "............"}
                                        <button
                                            className="focus:outline-none"
                                            type="button"
                                            onClick={() => {
                                                setIsVisible((prev) =>
                                                    prev === index ? -1 : index
                                                );
                                            }}
                                        >
                                            {isVisible === index ? (
                                                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            ) : (
                                                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                            )}
                                        </button>
                                    </div>
                                    <div className="border border-gray-700 p-2 flex flex-col rounded-xl mt-2 bg-stone-800">
                                        Note: {e[5]}
                                    </div>
                                    <div className="border border-gray-700 p-2 flex flex-col rounded-xl  mt-2 bg-stone-800">
                                        <ul>
                                            {e[4].map((k, index) => {
                                                return <li key={index}>{k}</li>;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-gray-700" />
                        </div>
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default MainPage;
