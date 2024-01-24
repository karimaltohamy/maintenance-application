import HeadPage from "../../components/headPage/HeadPage";
import imgOffer from "../../images/offer-1.jpg";
import "./offerDetails.scss";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { Link } from "react-router-dom";

const OfferDetails = () => {
  return (
    <div className="offer_details">
      <HeadPage title={"Offer Details"} />
      <div className="container">
        <div className="image_offer">
          <img src={imgOffer} alt="img-offer" />
        </div>
        <div className="details mt-3 pb-2">
          <h3 className="title text-[22px] font-semibold mb-2">
            Men Black Grey Allover Printed Round
          </h3>
          <div className="">
            <p className="font-medium mb-1">
              Discount percentage: <span className="text-gray-500">20%</span>
            </p>
            <p className=" font-medium">
              Expiry date: <span className="text-gray-500">20-10-2024</span>
            </p>
          </div>
        </div>
        <div className="features mt-3 pb-2 mb-3">
          <h4 className="text-[20px] font-semibold mb-3">Features:</h4>
          <ul>
            <li>
              <FaRegCheckCircle size={20} />
              <span>24 hours service</span>
            </li>
            <li>
              <FaRegCheckCircle size={20} />
              <span>3 months warranty</span>
            </li>
            <li>
              <FaRegCheckCircle size={20} />
              <span>24 hours service</span>
            </li>
            <li>
              <FaRegCheckCircle size={20} />
              <span>3 months warranty</span>
            </li>
            <li>
              <FaRegCheckCircle size={20} />
              <span>24 hours service</span>
            </li>
            <li>
              <FaRegCheckCircle size={20} />
              <span>3 months warranty</span>
            </li>
          </ul>
        </div>
        <div className="social">
          <h4 className="text-[20px] font-semibold mb-3">Conection:</h4>
          <div className="items flex items-center justify-between">
            <Link to={""} className="item facebook">
              <FaFacebook size={22} />
              <span>Facebook</span>
            </Link>
            <Link to={""} className="item website">
              <CgWebsite size={22} />
              <span>Our website</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
