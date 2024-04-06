import logo from "./../../assets/GlyphyGraphLongLogo.png";
const Header = () => {
    return (
        <div className="flex flex-row h-[10%]  items-center justify-between text-[#64748b]  text-lg ">
            <img src={logo} className="max-h-full" />
            <ul className="flex ">
                <li className="pr-5 duration-300 hover:text-white">
                    <a>SignUp</a>
                </li>
                <li className="hover:text-white duration-300 ">
                    <a>Login</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
