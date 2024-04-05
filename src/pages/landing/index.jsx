import Sidebar from "@components/sidebar";
import HeaderMain from "@components/headerMain";

const Landing = () => {
    return (
        <div>
            <div className="flex flex-row">

            <HeaderMain />
            <div className="flex">
                <div className="max-w-[50%] border-r border-white"></div>
                <div className="max-w-[50%]"></div>
            </div>
        </div>
            </div>
    );
};

export default Landing;
