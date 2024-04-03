import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <div className="flex flex-col  text-white bg-black w-100 h-dvh p-3 justify-center items-center">
                <h1 className="font-bold text-[40px] pb-2">404 - error</h1>
                <h3 className="font-semibold text-[15px] ">PAGE NOT FOUND</h3>
                <p className="text-[#94a3b8]">
                    Your search has ventured beyond the known universe
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col  text-white bg-black w-100 h-dvh p-3 justify-center items-center">
                <p className="text-[#94a3b8]">There was an error</p>
            </div>
        );
    }
};

export default ErrorPage;
