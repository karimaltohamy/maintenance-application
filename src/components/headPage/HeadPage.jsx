/* eslint-disable react/prop-types */
import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./headPage.scss";

const HeadPage = ({ title }) => {
  const navigate = useNavigate();
  const lang = localStorage.getItem("lang");

  return (
    <div
      className={`head_page flex items-center justify-between ${
        lang == "ar" && "flex-row-reverse"
      }`}
    >
      <Link className="arrow" onClick={() => navigate(-1)}>
        <IoMdArrowBack size={21} />
      </Link>
      <h4 className="text-[22px] font-bold">{title}</h4>
      <span></span>
    </div>
  );
};

export default HeadPage;
