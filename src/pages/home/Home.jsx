/* eslint-disable react/jsx-no-duplicate-props */
import { Header } from "../../components/header/Header";
import "./home.scss";
import ReportSection from "../../components/reportSection/ReportSection";
import OfferSection from "../../components/offersSection/OfferSection";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <OfferSection />
        <div>
          <ReportSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
