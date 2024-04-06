import BannerPage from "@pages/bannerpage";
import ErrorPage from "@pages/error";
import MainPage from "@pages/main";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Redirect } from "react-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <BannerPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "app",
                element: <MainPage />
            },
            {
                path: "error",
                element: <ErrorPage />
            }
        ],
    },
    {
        path: "*",
        element: <Redirect to="/error" />
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
