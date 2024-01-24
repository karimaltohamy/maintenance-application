import HeadPage from "../../components/headPage/HeadPage";
import profileImg from "../../images/profile-img.png";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineMailOutline, MdOutlineLocationCity } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <HeadPage title={"Profile"} />
      <div className="container">
        <div className="mb-4 text-center">
          <div className="image">
            <img
              src={profileImg}
              alt="profile-img"
              className="w-[90px] h-[90px] rounded-full object-cover mx-auto"
            />
          </div>
          <h3 className="font-semibold text-[22px]">James franco</h3>
          <p className="text-gray-500">James21@gmail.com</p>
        </div>
        <div className="details">
          <div className="items">
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <IoIosPerson size={25} />
                Name:
              </h4>
              <span className={"text-gray-500"}>James</span>
            </div>
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <MdOutlineMailOutline size={25} />
                Email:
              </h4>
              <span className={"text-gray-500"}>James21@gmail.com</span>
            </div>
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <MdLocalPhone size={25} />
                Phone:
              </h4>
              <span className={"text-gray-500"}>010084785</span>
            </div>
            <div className="item flex items-center justify-between gap-3">
              <h4 className="text-[18px] font-semibold flex items-center gap-2">
                <MdOutlineLocationCity size={25} />
                City:
              </h4>
              <span className={"text-gray-500"}>cairo</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <button className="btn_fill">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
