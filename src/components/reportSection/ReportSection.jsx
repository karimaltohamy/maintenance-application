import "./reportSection.scss";
import {
  MdDriveFileRenameOutline,
  MdOutlineEditLocationAlt,
  MdOutlineDevicesOther,
  MdOutlineDescription,
  MdOutlineLocalPhone,
} from "react-icons/md";
import { PiAddressBook } from "react-icons/pi";

const ReportSection = () => {
  return (
    <div className="report_section">
      <h3 className="text-[20px] font-semibold mb-2">Register Report</h3>
      <form action="">
        <div className="input_item">
          <MdDriveFileRenameOutline size={20} />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input_item">
          <MdOutlineEditLocationAlt size={20} />
          <input type="text" placeholder="Address" />
        </div>
        <div className="input_item">
          <PiAddressBook size={20} />
          <input type="text" placeholder="Region" />
        </div>
        <div className="input_item">
          <MdOutlineDevicesOther size={20} />
          <input type="text" placeholder="Device type" />
        </div>
        <div className="input_item">
          <MdOutlineDescription size={20} />
          <input type="text" placeholder="Description" />
        </div>
        <div className="input_item">
          <MdOutlineLocalPhone size={20} />
          <input type="number" placeholder="Phone 1" />
        </div>
        <div className="input_item">
          <MdOutlineLocalPhone size={20} />
          <input type="number" placeholder="Phone 2" />
        </div>
        <button className="btn_fill rounded-full py-1">Report</button>
      </form>
    </div>
  );
};

export default ReportSection;
