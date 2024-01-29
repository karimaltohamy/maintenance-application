import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLocationCity, MdOutlinePhone } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
import logo from "../../images/logo.png";
import "./register.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBabyCarriage } from "react-icons/fa";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";

const Register = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await apiAxios.post("/register", {
        company_id: 1,
        name,
        phone,
        country,
        age,
        password,
        password_confirmation: confirmPassword,
      });
      setLoading(false);
      toast.success(
        data.success && lang == "en" ? data.message.en : data.message.ar
      );
      navigate("/login");
    } catch (error) {
      setErrors(error.response.data.errors);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="register h-[100vh] flex items-end justify-center">
      <div className="content w-full">
        <div className="head mb-[60px] px-8 text-center">
          <div className="logo mb-[10px]">
            <img
              src={logo}
              alt="logo-img"
              loading="lazy"
              className="w-[200px]  mx-auto"
            />
          </div>
          <h3 className="text-[27px] font-bold text-white">
            {t("Welcome User!")}
          </h3>
          <p className="text-gray-400 text-[17px]">{t("Sign up to join")}</p>
        </div>
        <form
          className="h-[70vh] px-8 py-8  flex flex-col items-center justify-center"
          onSubmit={handleRegister}
        >
          <div className="item">
            <div className="input">
              <HiOutlineMail size={20} />
              <input
                type="text"
                placeholder={t("Name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <span className="error">{errors?.name && errors.name[0]}</span>
          </div>
          <div className="item">
            <div className="input">
              <MdOutlinePhone size={20} />
              <input
                type="number"
                placeholder={t("Phone number")}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <span className="error">{errors?.phone && errors.phone[0]}</span>
          </div>
          <div className="item">
            <div className="input">
              <MdLocationCity size={20} />
              <input
                type="text"
                placeholder={t("City")}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <span className="error">
              {errors?.country && errors.country[0]}
            </span>
          </div>
          <div className="item">
            <div className="input">
              <FaBabyCarriage size={20} />
              <input
                type="text"
                placeholder={t("Age")}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <span className="error">{errors?.age && errors.age[0]}</span>
          </div>
          <div className="item">
            <div className="input">
              <RiLockPasswordLine size={20} />
              <input
                type="password"
                placeholder={t("Password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className="error">
              {errors?.password && errors.password[0]}
            </span>
          </div>
          <div className="item">
            <div className="input">
              <RiLockPasswordLine size={20} />
              <input
                type="password"
                placeholder={t("Confirm Password")}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <span className="error">
              {errors?.confirmPassword && errors.confirmPassword[0]}
            </span>
          </div>
          <button className="btn_fill mb-4">{t("Register")}</button>
          <p className="text-center text-gray-500 font-medium ">
            {t("Already have an account?")}{" "}
            <Link to={"/login"} className="color_primary">
              {t("Login")}
            </Link>
          </p>
        </form>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default Register;
