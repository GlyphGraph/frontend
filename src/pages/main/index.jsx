import longLogo from "@assets/logo.png";
import { useAuth } from "@context/auth";
import AddIcon from "@mui/icons-material/Add";
import { Button, Image } from "@nextui-org/react";
import useSWR from "swr";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "./../../components/searchIcon";
import Dropdown from "./../../components/DropDown";

const MainPage = () => {
    const { auth } = useAuth();
    const { data } = useSWR(
        "getUserVaults",
        async () => await auth?.contract?.getUserVaults()
    );
    console.log(data);
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

            <div className="flex w-[100%] px-4 pt-4">
                <Input
                    isClearable
                    radius="lg"
                    classNames="mt-8 p-6"
                    placeholder="Type to search..."
                    startContent={<SearchIcon className="w-6" />}
                />
            </div>
            <Dropdown />
        </div>
    );
};

export default MainPage;
