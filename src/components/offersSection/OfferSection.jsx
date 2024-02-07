import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { url } from "../../utils/data.js";
import apiAxios from "../../utils/apiAxios.js";

const OfferSection = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await apiAxios.get(`offer?company_id=${1}`);
        setLoading(false);
        setOffers(data.data.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="offers_slider my-8">
      <Slider {...settings}>
        {offers &&
          offers.map((item, index) => {
            return (
              <Link
                to={`/offers/${item.id}`}
                className="offer_item"
                key={index}
              >
                <img
                  src={`${url}${item.image}`}
                  className="w-full"
                  alt="offer-img"
                  loading="lazy"
                />
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default OfferSection;
