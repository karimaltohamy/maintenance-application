import HeadPage from "../../components/headPage/HeadPage";
import profileImg from "../../images/profile-img.png";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineMailOutline, MdOutlineLocationCity } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import "./profile.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import { useDispatch } from "react-redux";
import { setLogout } from "../../store/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { useGoogleLogout } from "@leecheuk/react-google-login";
import { clientId } from "../../utils/data";
import useFetch from "../../hooks/useFetch";

const Profile = () => {
  const { t } = useTranslation();
  const { data: profile } = useFetch("/profile");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authGmail = localStorage.getItem("auth_gmail");
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
      await apiAxios.post("/logout");
      dispatch(setLogout());
      navigate("/login");
      authGmail && signOut();
      document.cookie =
        "G_AUTHUSER_H=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <HeadPage title={t("Profile")} />
      <div className="container">
        <div className="mb-4 text-center">
          <div className="image">
            <img
              src={profileImg}
              alt="profile-img"
              className="w-[90px] h-[90px] rounded-full object-cover mx-auto"
            />
          </div>
          <h3 className="font-semibold text-[22px]">
            {profile && profile.name}
          </h3>
          <p className="text-gray-500">{profile && profile.email}</p>
        </div>
        <div className="details">
          <div className="items">
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <IoIosPerson size={25} />
                {t("Name")}:
              </h4>
              <span className={"text-gray-500"}>{profile && profile.name}</span>
            </div>
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <MdOutlineMailOutline size={25} />
                {t("Email")}:
              </h4>
              <span className={"text-gray-500"}>
                {profile && profile.email}
              </span>
            </div>
            {profile?.phone && (
              <div className="item flex items-center justify-between gap-3">
                <h4 className="text-[18px] font-semibold flex items-center gap-2">
                  <MdLocalPhone size={25} />
                  {t("Phone")}:
                </h4>
                <span className={"text-gray-500"}>
                  {profile && profile.phone}
                </span>
              </div>
            )}
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <MdOutlineLocationCity size={25} />
                {t("Country")}:
              </h4>
              <span className={"text-gray-500"}>
                {profile && profile.country}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button className="btn_fill" onClick={handleLogout}>
            {t("Logout")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
