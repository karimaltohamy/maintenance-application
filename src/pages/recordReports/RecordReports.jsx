import { Link } from "react-router-dom";
import HeadPage from "../../components/headPage/HeadPage";
import "./reports.scss";

const RecordReports = () => {
  return (
    <div className="record_reports">
      <HeadPage title={"Reports"} />
      <div className="container">
        <h4 className="text-[22px] font-semibold mb-3">Reports:</h4>
        <div className="reports_items">
          <Link to={"/reports/1"} className="reports_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link>
          <Link to={"/reports/1"} className="reports_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link>
          <Link to={"/reports/1"} className="reports_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link>
          <Link to={"/reports/1"} className="reports_item">
            <div className="top flex items-center justify-between gap-3">
              <h5 className="text-[18px] font-semibold">tazkarti</h5>
              <span className="date text-gray-500">12-2-2023</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecordReports;
