import { useEffect, useState } from "react";
import HeadPage from "../../components/headPage/HeadPage";
import "./notifications.scss";
import PopupNotification from "../../components/popupNotification/PopupNotification";
import { useTranslation } from "react-i18next";
import apiAxios from "../../utils/apiAxios";
import { formateDate } from "../../utils/formatDate";
import { Link } from "react-router-dom";
import SmallLoader from "../../components/smallLoader/SmallLoader";
import InfiniteScroll from "react-infinite-scroll-component";

const Notification = () => {
  const { t } = useTranslation();
  const [openNotification, setopenNotification] = useState(false);
  const [notificationDetails, setNotificationDetails] = useState({});
  const [loading, setLoading] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  const handleOpenNotigication = (notification) => {
    setopenNotification(true);
    setNotificationDetails(notification);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(`/notification?page=${page}`);
        setNotifications((prev) => [...prev, ...data.data.data]);
        setLastPage(data.data.last_page);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [page]);

  const fetchData = () => {
    setPage(page + 1);
  };

  return (
    <div className="notification_page">
      <HeadPage title={t("Notification")} />
      <div className="container">
        <h4 className="text-[22px] font-semibold mb-3">{t("Notification")}:</h4>
        <div className="notifications_items">
          {notifications &&
            notifications.map((item, i) => {
              return item.alert ? (
                <div
                  className="notification_item"
                  onClick={() => handleOpenNotigication(item.alert)}
                  key={i}
                >
                  <div className="top flex items-center justify-between gap-3 mb-2">
                    <h5 className="text-[18px] font-semibold">Message</h5>
                    <span className="date text-gray-500">
                      {formateDate(
                        item.alert.created_at && item.alert.created_at
                      )}
                    </span>
                  </div>
                  <p>
                    {item.alert.text && item.alert.text.slice(0, 100)}
                    {item.alert.text.lenght > 100 && "..."}
                  </p>
                </div>
              ) : (
                <Link
                  to={`/offers/${item.offer.id}`}
                  className="offer_item"
                  key={i}
                >
                  <div className="top flex items-center justify-between gap-3 mb-2">
                    <h5 className="text-[18px] font-semibold">
                      {item.offer.name}
                    </h5>
                    <span className="date text-gray-500">
                      {formateDate(
                        item.offer.created_at && item.offer.created_at
                      )}
                    </span>
                  </div>
                </Link>
              );
            })}
          <InfiniteScroll
            dataLength={notifications.length}
            next={fetchData}
            hasMore={page < lastPage ? true : false}
            loader={<SmallLoader />}
          ></InfiniteScroll>
        </div>
      </div>
      {openNotification && (
        <PopupNotification
          setOpen={setopenNotification}
          notification={notificationDetails}
        />
      )}
    </div>
  );
};

export default Notification;
