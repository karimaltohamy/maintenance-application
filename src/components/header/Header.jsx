import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../images/logo.png";
import { FiLogOut } from "react-icons/fi";
import "./header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <Link to={"/settings"} className="settings">
            <IoSettingsOutline size={22} />
          </Link>
          <div className="logo">
            <img src={logo} alt="logo-img" className="w-[150px]" />
          </div>
          <div className="logout">
            <FiLogOut size={22} />
          </div>
        </div>
        <div className="information">
          <h3 className="text-[22px] font-semibold">Hi, Ahmed</h3>
          <p className="text-gray-500 text-[15px]">
            What service you are looking for ?
          </p>
        </div>
      </div>
    </div>
  );
};
