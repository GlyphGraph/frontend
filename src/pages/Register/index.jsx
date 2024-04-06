import logo from "@assets/logo.png";
import metamaskIcon from "@assets/metamask.webp";
import { useAuth } from "@context/auth";
import { Avatar, Button, Chip, Input } from "@nextui-org/react";
import { useGoogleLogin } from '@react-oauth/google';
import { getRandomWords } from "@utils/faker";
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import EastIcon from '@mui/icons-material/East';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from "react-router-dom";
import logo2 from "@assets/GlyphyGraphLongLogo.svg"

const Stages = Object.freeze({
    Accounts: "accounts",
    Password: "password"
})

export default function Signup() {
    const [stage, setStage] = useState(Stages.Accounts)
    const { auth, connectToWallet, setAuth, getProvider } = useAuth()
    const [, setUser] = useState()
    const [token, setToken] = useState()
    const [details, setDetails] = useState()
    const login = useGoogleLogin({
        onSuccess: async (code) => {
            setUser(code)
            await axios.post("https://oauth2.googleapis.com/token", {
                code: code.code,
                client_id: import.meta.env.VITE_GOOGLE_KEY,
                client_secret: import.meta.env.VITE_GOOGLE_SECRET,
                redirect_uri: 'http://localhost:5173', // Ensure this matches your OAuth configuration
                grant_type: 'authorization_code'
            })
                .then(res => res.data)
                .then(setToken)
                .catch(console.log)
        },
        flow: 'auth-code',
    });

    useEffect(() => {
        if (token) {
            setDetails(jwtDecode(token.id_token))
        }
    }, [token])

    useEffect(() => {
        if (!auth) {
            connectToWallet()
        }
    }, [])

    const [matrix, setMatrix] = useState()
    const handleRegister = async () => {
        if (stage === Stages.Accounts) {
            setStage(Stages.Password)
            setMatrix(getRandomWords())
            return
        }
        if (stage === Stages.Password) {
            return
        }
    }


    return (
        <div className="">
            <div className="flex flex-row h-20  items-center justify-between text-[#64748b]  text-lg px-5 pt-5">
                <Link to="/">
                    <img src={logo2} className="h-12" />
                </Link>
                <div className="flex justify-center">
                    {auth && (
                        <Chip
                            color="warning"
                            variant="bordered"
                            avatar={
                                <Avatar src={metamaskIcon} />
                            }
                            size="lg"
                            className="cursor-pointer"
                        >
                            {auth?.accountAddr.substr(0, 4) + "..." + auth?.accountAddr.substr(-4)}
                        </Chip>
                    )}
                </div>
            </div>
            <div className="h-screen flex items-center justify-center">
                <div className="border-2 rounded-2xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto  w-20 h-20"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                Sign up
                            </h2>
                        </div>

                        {stage === Stages.Accounts && (
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="flex flex-col gap-5 pt-4" >
                                    <Input
                                        id="email"
                                        name="email"
                                        size="md"
                                        type="email"
                                        label="Email"
                                        placeholder="Enter your email"
                                        required
                                        autoComplete="email"
                                        className=""
                                    />
                                    <Input
                                        id="password"
                                        name="password"
                                        size="sm"
                                        type="password"
                                        label="Password"
                                        placeholder="Enter your password"
                                        required
                                        autoComplete="current-password"
                                    />

                                    <div>
                                        <Button
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            onClick={handleRegister}
                                        >
                                            Sign up
                                        </Button>
                                    </div>
                                </form>

                                <div className=" flex items-center justify-center">
                                    <button
                                        className={`flex mt-3 justify-center ${styles["login-with-google-btn"]}`}
                                        onClick={() => login()}
                                    >
                                        Sign in with Google
                                    </button>
                                </div>
                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Already a member?{" "}
                                    <a
                                        href="/login"
                                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        )}
                        {stage === Stages.Password && (
                            <div className="flex flex-col gap-2 pt-4">
                                <p className="font-semibold font-sans">The following the master password for the account you should store this some where secure: </p>
                                <div className="flex flex-col gap-3 pt-4">
                                    {matrix?.map((e, i) => (
                                        <div key={i} className="flex gap-3">
                                            {e?.map((f, k) => <Input key={k} value={f} disabled />)}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-row gap-2 pt-4">
                                    <Button
                                        className="w-[95%]"
                                        color="primary"
                                        endIcon={
                                            <ContentCopyIcon fontSize="small" />
                                        }
                                    >
                                        Copy to Clipboard
                                    </Button>
                                    <Button
                                        className="w-[5%]"
                                        isIconOnly
                                    >
                                        <EastIcon fontSize="small" color="white" />
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
