import HeadPage from "../../components/headPage/HeadPage";
import "./offerDetails.scss";
import { FaFacebook } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Fragment, useEffect, useState } from "react";
import apiAxios from "../../utils/apiAxios";
import Loader from "../../components/loader/Loader";
import { url } from "../../utils/data.js";
import { formateDate } from "../../utils/formatDate.js";
import useFetch from "../../hooks/useFetch";

const OfferDetails = () => {
  const { id } = useParams();
  const { loading, data: offer } = useFetch(`/offer/${id}`, {});
  const { t } = useTranslation();

  return (
    <div className="offer_details">
      {!loading ? (
        <Fragment>
          <HeadPage title={t("Offer Details")} />
          <div className="container">
            <div className="image_offer">
              <img src={`${url}${offer?.image}`} alt="img-offer" />
            </div>
            <div className="details mt-3 pb-2">
              <h3 className="title text-[22px] font-semibold mb-2">
                {offer?.name && offer.name}
              </h3>
              <div className="">
                <p className="font-medium mb-1">
                  {t("Discount percentage")}:{" "}
                  <span className="text-gray-500">
                    {" "}
                    {offer.discount_type && offer.discount_type}
                  </span>
                </p>
                <p className=" font-medium">
                  {t("Expiry date")}:{" "}
                  <span className="text-gray-500">
                    {offer.end_date && formateDate(offer.end_date)}
                  </span>
                </p>
              </div>
            </div>
            <div className="features mt-3 pb-2 mb-3">
              <h4 className="text-[20px] font-semibold mb-3">
                {t("Features")}:
              </h4>
              <div
                className="items"
                dangerouslySetInnerHTML={{ __html: offer.features }}
              ></div>
            </div>
            <div className="social">
              <h4 className="text-[20px] font-semibold mb-3">
                {t("Conection")}:
              </h4>
              <div className="items flex items-center justify-between">
                <Link
                  to={offer.facebook_link && offer.facebook_link}
                  target="_blank"
                  className="item facebook"
                >
                  <FaFacebook size={22} />
                  <span>Facebook</span>
                </Link>
                <Link
                  to={offer.website_link && offer.website_link}
                  target="_blank"
                  className="item website"
                >
                  <CgWebsite size={22} />
                  <span>Our website</span>
                </Link>
              </div>
            </div>
          </div>{" "}
        </Fragment>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default OfferDetails;
