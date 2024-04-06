import Sidebar from "@components/sidebar";
import HeaderMain from "@components/headerMain";
import TextArea from "@components/textarea";
import VaultsBlock from "@components/vaults_block";
import AccountDertails from "@components/Account_details";
const Landing = () => {
    return (
        <div>
            <HeaderMain />
            <div className="flex flex-row h-[100vh]">
                <div className=" w-[50%] border-r border-white">
                    <VaultsBlock />
                </div>
                <div className=" flex-1 w-[50%]">
                    <AccountDertails />
                </div>
            </div>
        </div>
    );
};

export default Landing;
