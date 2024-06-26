import Login from "@pages/Login";
import Signup from "@pages/Register";
import BannerPage from "@pages/bannerpage";
import CreateLogin from "@pages/create-login";
import CreatePassword from "@pages/create-password";
import ErrorPage from "@pages/error";
import MainPage from "@pages/main";
import { Redirect } from "react-dom";
import { useRoutes } from "react-router-dom";

const App = () => {
    return useRoutes([
        {
            path: "/",
            element: <BannerPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/app",
            element: <MainPage />,
            errorElement: <ErrorPage />,

        },
        {
            path: "/error",
            element: <ErrorPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/login",
            element: <Login />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/register",
            element: <Signup />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/create-login",
            element: <CreateLogin />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/create-password",
            element: <CreatePassword />,
            errorElement: <ErrorPage />,
        },
        {
            path: "*",
            element: <ErrorPage />
        }
    ]);
};
export default App;
