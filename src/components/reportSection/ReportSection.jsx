import { useTranslation } from "react-i18next";
import "./reportSection.scss";
import {
  MdOutlineEditLocationAlt,
  MdOutlineDevicesOther,
  MdOutlineDescription,
  MdOutlineLocalPhone,
  MdDriveFileRenameOutline,
} from "react-icons/md";
import { PiAddressBook } from "react-icons/pi";
import { useState } from "react";
import apiAxios from "../../utils/apiAxios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ReportSection = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [description, setDescription] = useState("");
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [area, setArea] = useState("");
  const lang = localStorage.getItem("lang");
  const [errors, setErrors] = useState(null);
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleReport = async (e) => {
    e.preventDefault();

    if (!userInfo) {
      return navigate("/login");
    }

    try {
      const { data } = await apiAxios.post("/report", {
        name,
        address,
        device_type: deviceType,
        description,
        phone1,
        phone2,
        area,
      });
      toast.success(
        data.success && lang == "en" ? data.message.en : data.message.ar
      );
      setAddress("");
      setDeviceType("");
      setDescription("");
      setPhone1("");
      setPhone2("");
      setArea("");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  return (
    <div className="report_section">
      <h3 className="text-[20px] font-semibold mb-2">{t("Register Report")}</h3>
      <form onSubmit={handleReport}>
        <div className="item">
          <div className="input_item">
            <MdDriveFileRenameOutline size={20} />
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
          <div className="input_item">
            <MdOutlineEditLocationAlt size={20} />
            <input
              type="text"
              placeholder={t("Address")}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <span className="error">{errors?.address && errors.address[0]}</span>
        </div>
        <div className="item">
          <div className="input_item">
            <PiAddressBook size={20} />
            <input
              type="text"
              placeholder={t("Region")}
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
          <span className="error">{errors?.ara && errors.area[0]}</span>
        </div>
        <div className="item">
          <div className="input_item">
            <MdOutlineDevicesOther size={20} />
            <input
              type="text"
              placeholder={t("Device type")}
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
            />
          </div>
          <span className="error">{errors?.area && errors.area[0]}</span>
        </div>
        <div className="item">
          <div className="input_item">
            <MdOutlineDescription size={20} />
            <input
              type="text"
              placeholder={t("Description")}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <span className="error">
            {errors?.description && errors.description[0]}
          </span>
        </div>
        <div className="item">
          <div className="input_item">
            <MdOutlineLocalPhone size={20} />
            <input
              type="number"
              placeholder={t("Phone 1")}
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
            />
          </div>
          <span className="error">{errors?.phone1 && errors.phone1[0]}</span>
        </div>
        <div className="item">
          <div className="input_item">
            <MdOutlineLocalPhone size={20} />
            <input
              type="number"
              placeholder={t("Phone 2")}
              value={phone2}
              onChange={(e) => setPhone2(e.target.value)}
            />
          </div>
          <span className="error">{errors?.phone2 && errors.phone2[0]}</span>
        </div>
        <button className="btn_fill rounded-full py-1">{t("Report")}</button>
      </form>
    </div>
  );
};

export default ReportSection;
