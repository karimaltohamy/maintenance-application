import { useTranslation } from "react-i18next";
import HeadPage from "../../components/headPage/HeadPage";
import { useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import Loader from "../../components/loader/Loader";
import { useParams } from "react-router-dom";
import { formateDate } from "../../utils/formatDate";

const ReportsDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [loading, setLoading] = useState("");
  const [report, setReport] = useState({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(`/report/${id}`);
        setReport(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="reports_details">
      <HeadPage title={t("Report details")} />
      <div className="container">
        <h5 className="text-[22px] font-semibold mb-2">
          {report.name && report.name}
        </h5>
        <div className="top flex items-center justify-between gap-3 mb-2">
          <h5 className="text-[16px] font-semibold">
            {t("Type Device")}:{" "}
            <span className="text-gray-500">
              {report.device_type && report.device_type}
            </span>{" "}
          </h5>
          <span className="date text-gray-500 font-semibold">
            {report.created_at && formateDate(report.created_at)}
          </span>
        </div>
        <h5 className="text-[16px] font-semibold">
          {t("Phone")}:{" "}
          <span className="text-gray-500">
            {report.phone1 && report.phone1}
          </span>{" "}
        </h5>
        <div className="desc mt-3">
          <p className="text-gray-500 mb-2">
            {report.description && report.description}
          </p>
        </div>
      </div>
      {loading && <Loader />}
    </div>
  );
};

export default ReportsDetails;
