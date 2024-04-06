import AccountDetails from "@components/Account_details";
import HeaderMain from "@components/headerMain";
import VaultsBlock from "@components/vaults_block";


const MainPage = () => {
    return (
        <div>
            <HeaderMain />
            <div className="flex flex-row h-[100vh]">
                <div className=" w-[50%] border-r border-white">
                    <VaultsBlock />
                </div>
                <div className="flex-1 w-[50%]">
                    <AccountDetails />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
