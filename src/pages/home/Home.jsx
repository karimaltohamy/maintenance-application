/* eslint-disable react/jsx-no-duplicate-props */
import { Header } from "../../components/header/Header";
import offerImg1 from "../../images/offer-1.jpg";
import offerImg2 from "../../images/offer-2.jpg";
import offerImg3 from "../../images/offer-3.jpg";
import { Link } from "react-router-dom";
import "./home.scss";
import Slider from "react-slick";
import ReportSection from "../../components/reportSection/ReportSection";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const offersImages = [
    {
      img: offerImg1,
    },
    {
      img: offerImg2,
    },
    {
      img: offerImg3,
    },
  ];
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="offers_slider my-8">
          <Slider {...settings}>
            {offersImages &&
              offersImages.map((item, index) => {
                return (
                  <Link to={"/offers/1"} className="offer_item" key={index}>
                    <img src={item.img} alt="offer-img" loading="lazy" />
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
