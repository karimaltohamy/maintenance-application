/* eslint-disable react/jsx-no-duplicate-props */
import { Header } from "../../components/header/Header";
import { Link } from "react-router-dom";
import "./home.scss";
import Slider from "react-slick";
import ReportSection from "../../components/reportSection/ReportSection";
import { useSelector } from "react-redux";
import { url } from "../../utils/data.js";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const { userInfo } = useSelector((state) => state.user);
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="offers_slider my-8">
          <Slider {...settings}>
            {userInfo.offers &&
              userInfo.offers.map((item, index) => {
                return (
                  <Link
                    to={`/offers/${item.id}`}
                    className="offer_item"
                    key={index}
                  >
                    <img
                      src={`${url}${item.image}`}
                      alt="offer-img"
                      loading="lazy"
                    />
                  </Link>
                );
              })}
          </Slider>
        </div>
        <div>
          <ReportSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
