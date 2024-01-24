import { MdOutlineClose } from "react-icons/md";
import "./poupNotification.scss";
import { createPortal } from "react-dom";

const PopupNotification = ({ message, setOpen }) => {
  return createPortal(
    <div className="popup_notification">
      <div className="content">
        <div className="close_popup" onClick={() => setOpen(false)}>
          <MdOutlineClose size={22} />
        </div>
        <div className="top flex items-center justify-between gap-3">
          <h5 className="text-[18px] font-semibold">tazkarti</h5>
          <span className="date text-gray-500">12-2-2023</span>
        </div>
        <p className="message text-gray-500">{message}</p>
      </div>
    </div>,
    document.getElementById("popups")
  );
};

export default PopupNotification;
