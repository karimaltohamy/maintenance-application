/* eslint-disable react/no-unescaped-entities */
import logo from "../../images/logo.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserError,
  setUserStart,
  setUserSuccess,
} from "../../store/reducers/userReducer";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");
  const { loading } = useSelector((state) => state.user);

  // handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setUserStart());
    try {
      const { data } = await apiAxios.post("login", {
        username,
        password,
      });
      dispatch(setUserSuccess(data.data));
      localStorage.setItem("access_token", data.access_token);
      apiAxios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access_token}`;
      toast.success(
        data.success && lang == "en"
          ? "Successful login"
          : "تم تسجيل الدخول بنجاح"
      );
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.errors);
      dispatch(setUserError());
    }
  };

  return (
    <div className="login h-[100vh] flex items-end justify-center">
      <div className="content w-full">
        <div className="head mb-[60px] px-8 text-center">
          <div className="logo mb-[10px]">
            <img
              src={logo}
              alt="logo-img"
              loading="lazy"
              className="w-[200px] mx-auto"
            />
          </div>
          <h3 className="text-[27px] font-bold text-white">
            {t("Welcome User!")}
          </h3>
          <p className="text-gray-400 text-[17px]">{t("Sign up to join")}</p>
        </div>
        <form
          className="h-[50vh] px-8 py-8 flex flex-col items-center justify-center"
          onSubmit={handleLogin}
        >
          <div className="input">
            <HiOutlineMail size={20} />
            <input
              type="text"
              placeholder={t("Email or phone number")}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <RiLockPasswordLine size={20} />
            <input
              type="password"
              placeholder={t("Password")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn_fill mb-4">{t("Login")}</button>
          <p className="text-center text-gray-500 font-medium ">
            {t("Don't have an account?")}{" "}
            <Link to={"/register"} className="color_primary">
              {t("Register")}
            </Link>
          </p>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Login;
