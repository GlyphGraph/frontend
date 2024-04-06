import logo from "@assets/logo.png";
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import { useAuth } from "@context/auth";
import { Chip, Avatar } from "@nextui-org/react";
import metamaskIcon from "@assets/metamask.webp";

export default function Signup() {
    const { auth, connectToWallet, setAuth } = useAuth()
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


    return (
        <div className="">
            <div className="h-screen flex items-center justify-center">
                <div className="border-2 rounded-2xl ">
                    <div className="flex  min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto  w-20 h-20"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                Sign up
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <div className="flex justify-center">
                                {auth && (
                                    <Chip
                                        color="warning"
                                        variant="bordered"
                                        avatar={
                                            <Avatar src={metamaskIcon} />
                                        }
                                        size="lg"
                                        onClick={() => {
                                            setAuth(null);
                                            connectToWallet()
                                        }}
                                        className="cursor-pointer"
                                    >
                                        {auth?.accountAddr.substr(0, 4) + "..." + auth?.accountAddr.substr(-4)}
                                    </Chip>
                                )}
                            </div>
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    {/* <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Email address
                                    </label> */}

                                    <div className="mt-2">
                                        {/* <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        /> */}
                                        <Input
                                            id="email"
                                            name="email"
                                            size="sm"
                                            type="email"
                                            label="Email"
                                            placeholder="Enter your email"
                                            required
                                            autoComplete="email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    {/* <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="password"
                                            className="block text-sm font-medium leading-6 text-white"
                                        >
                                            Password
                                        </label>
                                    </div> */}
                                    <div className="mt-2">
                                        {/* <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        /> */}
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
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign up
                                    </button>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
