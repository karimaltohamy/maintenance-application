import { Fragment, useEffect, useState } from "react";
import Navigation from "../components/navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import RecordReports from "../pages/recordReports/RecordReports";
import Notification from "../pages/notification/Notification";
import Settings from "../pages/settings/Settings";
import OfferDetails from "../pages/offerDetails/OfferDetails";
import ReportsDetails from "../pages/reportsDetails/ReportsDetails";

const Layout = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return mobile ? (
    <Fragment>
      {!location.pathname.includes("login") &&
        !location.pathname.includes("register") && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/record-reports" element={<RecordReports />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
        <Route path="/reports/:id" element={<ReportsDetails />} />
      </Routes>
    </Fragment>
  ) : (
    <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      being processing now
    </p>
  );
};

export default Layout;
