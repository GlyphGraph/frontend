import React from "react";
import logo from "./../../assets/logo.png";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton variant="text" size="lg" onClick={openDrawer}>
                {isDrawerOpen ? (
                    <XMarkIcon className="h-8 w-8 stroke-6" />
                ) : (
                    <Bars3Icon className="h-8 w-8 stroke-6" />
                )}
            </IconButton>
            <Drawer
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="bg-[#1e1e1f7a] text-white border-r rounded-r-[12px] shadow-r shadow-[10px 0 10px white] z-10"
            >
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-4 p-4">
                        <img src={logo} className="h-9 w-9" />
                        <Typography variant="h5" color="blue-gray">
                            GlyphGraph
                        </Typography>
                    </div>

                    <List>
                        <Accordion
                            open={open === 1}
                            icon={
                                <ChevronDownIcon
                                    strokeWidth={2.5}
                                    className={`mx-auto h-4 w-4 transition-transform ${
                                        open === 1 ? "rotate-180" : ""
                                    }`}
                                />
                            }
                        >
                            <ListItem className="p-0" selected={open === 1}>
                                <AccordionHeader
                                    onClick={() => handleOpen(1)}
                                    className="border-b-0 p-3"
                                >
                                    {/* <ListItemPrefix>
                                        <PresentationChartBarIcon className="h-5 w-5" />
                                    </ListItemPrefix> */}
                                    <Typography
                                        color="blue-gray"
                                        className="mr-auto font-semibold text-[18px] "
                                    >
                                        All Vaults
                                    </Typography>
                                </AccordionHeader>
                            </ListItem>
                            <AccordionBody className="py-1">
                                <List className="p-0">
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        Personal
                                    </ListItem>
                                    <ListItem>
                                        <ListItemPrefix>
                                            <ChevronRightIcon
                                                strokeWidth={3}
                                                className="h-3 w-5"
                                            />
                                        </ListItemPrefix>
                                        Trash
                                    </ListItem>
                                </List>
                            </AccordionBody>
                        </Accordion>

                        <hr className="my-2 border-blue-gray-50" />

                        <ListItem>
                            <ListItemPrefix>
                                <UserCircleIcon className="h-5 w-5 mr-[2px]" />
                            </ListItemPrefix>
                            Profile
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <Cog6ToothIcon className="h-5 w-5 mr-[2px]" />
                            </ListItemPrefix>
                            Settings
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <PowerIcon className="h-5 w-5 mr-[2px]" />
                            </ListItemPrefix>
                            Log Out
                        </ListItem>
                    </List>
                </Card>
            </Drawer>
        </>
    );
}
