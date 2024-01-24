import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuClipboardList } from "react-icons/lu";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="links">
        <NavLink
          to={"/profile"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <CgProfile size={25} />
          <span>Profile</span>
        </NavLink>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <FiHome size={25} />
          <span>Home</span>
        </NavLink>
        <NavLink
          to={"/notification"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <RiNotification2Line size={25} />
          <span>Notification</span>
        </NavLink>
        <NavLink
          to={"/record-reports"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <LuClipboardList size={25} />
          <span>Reports</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
