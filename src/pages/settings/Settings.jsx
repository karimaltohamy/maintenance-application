import { IoInvertModeOutline } from "react-icons/io5";
import "./settings.scss";
import { MdLanguage } from "react-icons/md";
import HeadPage from "../../components/headPage/HeadPage";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Settings = () => {
  const { i18n, t } = useTranslation();
  const lang = localStorage.getItem("lang");
  const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

  const changeLanguage = (e) => {
    let lng = e.target.value;

    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);

    if (lng == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
  };

  // change theme
  const handleModeTheme = (e) => {
    let value = e.target.checked;
    if (value) {
      setMode("dark");
      localStorage.setItem("mode", "dark");
      document.body.classList.add("dark");
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
      document.body.classList.remove("dark");
    }
  };

  console.log(mode);

  return (
    <div className="settings">
      <HeadPage title={t("Settings")} />
      <div className="container">
        <div className="general">
          <h5 className="text-[20px] text-gray-500 mb-2">{t("General")}</h5>
          <div className="items">
            <div className="item mb-4">
              <MdLanguage size={28} />
              <select value={lang} onChange={(e) => changeLanguage(e)}>
                <option value="">{t("Select language")}</option>
                <option value="en">English</option>
                <option value="ar">العربيه</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div className="item">
                <IoInvertModeOutline size={28} />
                <h4> {t("Mode")}</h4>
              </div>
              <div className="container_switch">
                <input
                  type="checkbox"
                  className="checkbox hidden"
                  id="checkbox"
                  checked={mode == "dark"}
                  value={mode}
                  onChange={handleModeTheme}
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
