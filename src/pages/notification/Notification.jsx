import { useState } from "react";
import HeadPage from "../../components/headPage/HeadPage";
import "./notifications.scss";
import PopupNotification from "../../components/popupNotification/PopupNotification";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { t } = useTranslation();
  const [openNotification, setopenNotification] = useState(false);
  // const [messageDetails, setMessageDetails] = useState("")

  return (
    <div className="notification_page">
      <HeadPage title={t("Notification")} />
      <div className="container">
        <h4 className="text-[22px] font-semibold mb-3">{t("Notification")}:</h4>
        <div className="notifications_items">
          <div
            className="notifications_item"
            onClick={() => setopenNotification(true)}
          >
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="notifications_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="notifications_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="notifications_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      {openNotification && (
        <PopupNotification
          setOpen={setopenNotification}
          message={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi consectetur unde recusandae sapiente, molestiae est accusantium optio eveniet, quod ducimus voluptatum voluptas sit quo quam dignissimos laborum aut doloribus tempora!"
          }
        />
      )}
    </div>
  );
};

export default Notification;
