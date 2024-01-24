import { IoInvertModeOutline } from "react-icons/io5";
import "./settings.scss";
import { MdLanguage } from "react-icons/md";
import HeadPage from "../../components/headPage/HeadPage";

const Settings = () => {
  return (
    <div className="settings">
      <HeadPage title={"Settings"} />
      <div className="container">
        <div className="general">
          <h5 className="text-[20px] text-gray-500 mb-2">General</h5>
          <div className="items">
            <div className="item mb-4">
              <MdLanguage size={28} />
              <select>
                <option value="">Select language</option>
                <option value="en">English</option>
                <option value="ar">العربيه</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="item">
                <IoInvertModeOutline size={28} />
                <h4> Mode</h4>
              </div>
              <div className="container_switch">
                <input
                  type="checkbox"
                  className="checkbox hidden"
                  id="checkbox"
                />
                <label className="switch" htmlFor="checkbox">
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
