import logo from "./../../assets/GlyphyGraphLongLogo.png";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex flex-row h-[10%]  items-center justify-between text-[#64748b]  text-lg ">
            <img src={logo} className="max-h-full" />
            <ul className="flex ">
                <li className="pr-5 duration-300 hover:text-white">
                    <Link to="/register">SignUp</Link>
                    {/* <a>SignUp</a> */}
                </li>
                <li className="hover:text-white duration-300 ">
                    {/* <a>Login</a>
                     */}
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
