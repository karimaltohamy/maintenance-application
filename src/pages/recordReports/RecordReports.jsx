import { Link } from "react-router-dom";
import HeadPage from "../../components/headPage/HeadPage";
import "./reports.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import { formateDate } from "../../utils/formatDate";
import InfiniteScroll from "react-infinite-scroll-component";
import SmallLoader from "../../components/smallLoader/SmallLoader";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/loader/Loader";

const RecordReports = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch(`/report?page=${page}`, []);
  const [reports, setReports] = useState(data.data || []);
  const [lastPage, setLastPage] = useState(data.last_page || 1);

  const fetchData = () => {
    setPage(page + 1);
  };

  return (
    <div className="record_reports">
      <HeadPage title={t("Reports")} />
      <div className="container">
        <h4 className="text-[22px] font-semibold mb-3">{t("Reports")}:</h4>
        {!loading ? (
          <div className="reports_items">
            {data.data &&
              data.data.map((item, i) => {
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
              dataLength={data.data.length}
              next={fetchData}
              hasMore={page < lastPage ? true : false}
              loader={<SmallLoader />}
            ></InfiniteScroll>
            {loading && <SmallLoader />}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default RecordReports;
