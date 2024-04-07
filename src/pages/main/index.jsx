import longLogo from "@assets/logo.png";
import Dropdown from "@components/DropDown";
import { SearchIcon } from "@components/searchIcon";
import { useAuth } from "@context/auth";
import AddIcon from "@mui/icons-material/Add";
import { Button, Image, Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";
import LockIcon from '@mui/icons-material/Lock';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';

const MainPage = () => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => setOpen(prev => !prev)

    const { auth } = useAuth();
    const [vaults, setVaults] = useState([])
    const [vaultName, setVaultName] = useState("")


    useEffect(() => {
        if (auth) {
            const getVaults = async () => {
                await auth.contract.getUserVaults()
                    .then(setVaults)
                    .catch(err => {
                        console.log("err", err)
                    })
            }
            getVaults()
        }
    }, [auth])


    const { data: newVaultResult, trigger, error } = useSWRMutation(
        "newVault",
        async (_, { arg: data }) => await auth?.contract?.createVaultWithPassword(...data)
    )

    const handleCreateNewVault = async () => {
        await trigger([vaultName, false, ""])
    }

    useEffect(() => {
        if (error) {
            console.log(error)
        }
        else {
            console.log(newVaultResult)
            setVaultName("")
        }
    }, [error, newVaultResult])

    return (
        <>
            <div className="flex flex-row ">
                <div className="bg-slate-950 w-[15%] h-dvh flex flex-col gap-8">
                    <div className="flex flex-row justify-start items-center pl-4 pt-4">
                        <Image
                            src={longLogo}
                            className="bg-inherit w-14 self-center"
                        />
                    </div>
                    <div className="px-3 pl-4">
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between py-2 hover:bg-color-slate-900 items-center">
                                Vaults
                                <Button isIconOnly size="sm" variant="light" onClick={() => {
                                    console.log("hello")
                                    handleToggle()
                                }}>
                                    <AddIcon fontSize="small" />
                                </Button>
                            </div>
                            {open && (
                                <div className="flex flex-col gap-2">
                                    <Input
                                        value={vaultName}
                                        onChange={(e) => setVaultName(e.target.value)}
                                        placeholder="Enter the name of the new vault"
                                    />
                                    <Button onClick={handleCreateNewVault}>Create</Button>
                                </div>
                            )}
                            <div className="flex flex-col gap-2">
                                {vaults.map(e => (
                                    <div key={e?.[0]} className="py-1.5 items-center bg-slate-900 px-2 rounded flex flex-row justify-between">
                                        <div className="flex flex-col">
                                            <p>{e?.[2]}</p>
                                        </div>
                                        <div>
                                            {e?.[3] ? <LockIcon fontSize="small" /> : <NoEncryptionIcon fontSize="small" />}
                                        </div>
                                    </div>
                                ))}
                            </div>
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
        </>
    );
};

export default MainPage;
