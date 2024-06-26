import logo from "@assets/logo.png";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "./styles.module.scss";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Header from "@components/header";
import HeaderMain from "@components/headerMain";
import logo2 from "./../../assets/GlyphyGraphLongLogo.png";

export default function Login() {
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => console.log(codeResponse),
        flow: "auth-code",
    });
    return (
        <>
            <div className="flex flex-row h-20  items-center justify-between text-[#64748b]  text-lg pl-3 pr-3 pt-5">
                <Link to="/">
                    <img src={logo2} className="h-12" />
                </Link>
            </div>
            <div className="h-screen flex  shadow-2xl items-center justify-center">
                <div className="border-2 rounded-2xl">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <Link to="/">
                                <img
                                    className="mx-auto  w-20 h-20"
                                    src={logo}
                                    alt="Your Company"
                                />
                            </Link>
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                Sign in to your account
                            </h2>
                        </div>
                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form
                                className="space-y-7"
                                action="#"
                                method="POST"
                            >
                                <div>
                                    {/* <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-white"
                                >
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
                                    <div className="mt-3">
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
                                    <Button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign in
                                    </Button>
                                </div>
                            </form>

                            <div className=" flex items-center justify-center">
                                <Button
                                    variant="night"
                                    className={`flex mt-3 justify-center ${styles["login-with-google-btn"]} `}
                                    onClick={() => login()}
                                >
                                    Sign in with Google
                                </Button>
                            </div>
                            <p className="mt-10 text-center text-sm text-gray-500">
                                Not a member?{" "}
                                <a
                                    href="/register"
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                >
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
