/* eslint-disable react/no-unescaped-entities */
import logo from "../../images/logo.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
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
          <h3 className="text-[27px] font-bold text-white">Welcome User!</h3>
          <p className="text-gray-400 text-[17px]">Sign up to join</p>
        </div>
        <form className="h-[50vh] px-8 py-8 bg-white flex flex-col items-center justify-center ">
          <div className="input">
            <HiOutlineMail size={20} />
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="input">
            <RiLockPasswordLine size={20} />
            <input type="text" placeholder="Password" />
          </div>
          <button className="btn_fill mb-4">Login</button>
          <p className="text-center text-gray-500 font-medium ">
            Don't have an account?{" "}
            <Link to={"/register"} className="color_primary">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
