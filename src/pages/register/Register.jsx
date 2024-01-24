import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdLocationCity, MdOutlinePhone } from "react-icons/md";
import { Link } from "react-router-dom";
/* eslint-disable react/no-unescaped-entities */
import logo from "../../images/logo.png";
import "./register.scss";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [phoneNmber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log(true);
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
          <h3 className="text-[27px] font-bold text-white">Welcome User!</h3>
          <p className="text-gray-400 text-[17px]">Sign up to join</p>
        </div>
        <form
          className="h-[60vh] px-8 py-8 bg-white flex flex-col items-center justify-center"
          onSubmit={handleRegister}
        >
          <div className="input">
            <HiOutlineMail size={20} />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <MdOutlinePhone size={20} />
            <input
              type="number"
              placeholder="Phone number"
              value={phoneNmber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="input">
            <MdLocationCity size={20} />
            <input
              type="text"
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="input">
            <RiLockPasswordLine size={20} />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input">
            <RiLockPasswordLine size={20} />
            <input
              type="text"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn_fill mb-4">Register</button>
          <p className="text-center text-gray-500 font-medium ">
            Already have an account?{" "}
            <Link to={"/login"} className="color_primary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
