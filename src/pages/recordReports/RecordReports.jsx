import { Link } from "react-router-dom";
import HeadPage from "../../components/headPage/HeadPage";
import "./reports.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import { formateDate } from "../../utils/formatDate";
import InfiniteScroll from "react-infinite-scroll-component";
import SmallLoader from "../../components/smallLoader/SmallLoader";

const RecordReports = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState("");
  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(`/report?page=${page}`);
        setReports(data.data.data);
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
    <div className="record_reports">
      <HeadPage title={t("Reports")} />
      <div className="container">
        <h4 className="text-[22px] font-semibold mb-3">{t("Reports")}:</h4>
        <div className="reports_items">
          {reports &&
            reports.map((item, i) => {
              return (
                <Link
                  to={`/reports/${item.id}`}
                  className="report_item"
                  key={i}
                >
                  <div className="top flex items-center justify-between gap-3">
                    <h5 className="text-[18px] font-semibold">{item.name}</h5>
                    <span className="date text-gray-500">
                      {formateDate(item.created_at && item.created_at)}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </Link>
              );
            })}
          <InfiniteScroll
            dataLength={reports.length}
            next={fetchData}
            hasMore={page < lastPage ? true : false}
            loader={<SmallLoader />}
          ></InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export default RecordReports;
