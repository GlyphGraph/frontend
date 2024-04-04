import { Input } from "@nextui-org/react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";

const HeaderMain = () => {
    return (
        <div className="h-[15%] flex gap-3 justify-center items-center p-4 border-b border-gray-700">
            <Input
                placeholder="Search in all vaults..."
                className="max-w-50 bg-transparent border border-gray-700  focus:border-gray-200 rounded-xl "
                size="md"
            />
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        isIconOnly
                        variant="bordered"
                        className="rounded-full px-0 max-w-0 text-[25px] text-gray-500 flex justify-center items-center"
                    >
                        +
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Static Actions"
                    className="bg-black  border border-gray-500 rounded-md"
                >
                    <DropdownItem key="new">Login</DropdownItem>
                    <DropdownItem key="copy">Note</DropdownItem>
                    <DropdownItem key="edit">Password</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default HeaderMain;
