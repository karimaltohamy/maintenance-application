import { Link } from "react-router-dom";
import HeadPage from "../../components/headPage/HeadPage";
import "./reports.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import Loader from "../../components/loader/Loader";
import { formateDate } from "../../utils/formatDate";

const RecordReports = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState("");
  const [reports, setReports] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(`/report?page=${page}`);
        setReports(data.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  className="reports_item"
                  key={i}
                >
                  <div className="top flex items-center justify-between gap-3">
                    <h5 className="text-[18px] font-semibold">{item.name}</h5>
                    <span className="date text-gray-500">
                      {formateDate(item.created_at)}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </Link>
              );
            })}
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default RecordReports;
