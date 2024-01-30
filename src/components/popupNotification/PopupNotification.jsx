import { MdOutlineClose } from "react-icons/md";
import "./poupNotification.scss";
import { createPortal } from "react-dom";
import { formateDate } from "../../utils/formatDate";

const PopupNotification = ({ notification, setOpen }) => {
  return createPortal(
    <div className="popup_notification">
      <div className="content">
        <div className="close_popup" onClick={() => setOpen(false)}>
          <MdOutlineClose size={22} />
        </div>
        <div className="top flex items-center justify-between gap-3">
          <h5 className="text-[18px] font-semibold"></h5>
          <span className="date text-gray-500">
            {formateDate(notification.created_at && notification.created_at)}
          </span>
        </div>
        <p className="message text-gray-500">{notification.text}</p>
      </div>
    </div>,
    document.getElementById("popups")
  );
};

export default PopupNotification;
