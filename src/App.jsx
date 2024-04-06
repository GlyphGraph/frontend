import BannerPage from "@pages/bannerpage";
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
            path: "app",
            element: <MainPage />,
            errorElement: <ErrorPage />,

        },
        {
            path: "error",
            element: <ErrorPage />,
            errorElement: <ErrorPage />,
        },
        {
            path: "*",
            element: <Redirect to="/error" />,
            errorElement: <ErrorPage />
        }
    ]);
};
export default App;
