import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../images/logo.png";
import { FiLogOut } from "react-icons/fi";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import apiAxios from "../../utils/apiAxios";
import { setLogout } from "../../store/reducers/userReducer";

export const Header = () => {
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiAxios.post("/logout");
      dispatch(setLogout());
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="logout" onClick={handleLogout}>
            <FiLogOut size={22} />
          </div>
        </div>
        <div className="information">
          <h3 className="text-[22px] font-semibold">
            {t("Hi")}, {userInfo.name}
          </h3>
          <p className="text-gray-500 text-[15px]">
            {t("What service you are looking for ?")}
          </p>
        </div>
      </div>
    </div>
  );
};
