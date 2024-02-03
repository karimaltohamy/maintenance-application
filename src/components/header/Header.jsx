import { IoSettingsOutline } from "react-icons/io5";
import logo from "../../images/logo.png";
import { FiLogOut } from "react-icons/fi";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import apiAxios from "../../utils/apiAxios";
import { setLogout } from "../../store/reducers/userReducer";
import { useGoogleLogout } from "@leecheuk/react-google-login";
import { clientId } from "../../utils/data";

export const Header = () => {
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.user);
  const authGmail = localStorage.getItem("auth_gmail");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signOut } = useGoogleLogout({
    clientId: clientId,
    onLogoutSuccess: () => {
      console.log("Logout successful");
    },
    onFailure: (error) => {
      console.log("Logout failed:", error);
    },
  });

  const handleLogout = async () => {
    try {
      authGmail && signOut();
      await apiAxios.post("/logout");
      dispatch(setLogout());
      navigate("/login");
      document.cookie =
        "G_AUTHUSER_H=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <div className="flex items-center justify-between mb-10 ">
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
        {userInfo ? (
          <div className="information">
            <h3 className="text-[22px] font-semibold">
              {t("Hi")}, {userInfo.name}
            </h3>
            <p className="text-gray-500 text-[15px]">
              {t("What service you are looking for ?")}
            </p>
          </div>
        ) : (
          <div className="information">
            <h3 className="text-[22px] font-semibold">
              {t("Please login now")}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};
