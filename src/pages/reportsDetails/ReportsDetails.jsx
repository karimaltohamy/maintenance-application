import HeadPage from "../../components/headPage/HeadPage";

const ReportsDetails = () => {
  return (
    <div className="reports_details">
      <HeadPage title={"Report details"} />
      <div className="container">
        <h5 className="text-[22px] font-semibold mb-2">tazkarti</h5>
        <div className="top flex items-center justify-between gap-3">
          <h5 className="text-[16px] font-semibold">
            Type Device: <span className="text-gray-500">samsung</span>{" "}
          </h5>
          <span className="date text-gray-500 font-semibold">12-2-2023</span>
        </div>
        <div className="desc mt-3">
          <p className="text-gray-500 mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            aliquid quo, tempore impedit fugiat ratione quas natus incidunt,
            eveniet itaque magnam nihil quos quasi dignissimos. Harum tempora
            porro alias nulla.
          </p>
          <p className="text-gray-500 mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            aliquid quo, tempore impedit fugiat ratione quas natus incidunt,
            eveniet itaque magnam nihil quos quasi dignissimos. Harum tempora
            porro alias nulla.
          </p>
          <p className="text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            aliquid quo, tempore impedit fugiat ratione quas natus incidunt,
            eveniet itaque magnam nihil quos quasi dignissimos. Harum tempora
            porro alias nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReportsDetails;
