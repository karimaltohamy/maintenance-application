import React, { Fragment, Suspense, useEffect, useState } from "react";
import Navigation from "../components/navigation/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";
const Home = React.lazy(() => import("../pages/home/Home"));
const Login = React.lazy(() => import("../pages/login/Login"));
const Register = React.lazy(() => import("../pages/register/Register"));
const Profile = React.lazy(() => import("../pages/profile/Profile"));
const RecordReports = React.lazy(() =>
  import("../pages/recordReports/RecordReports")
);
const Notification = React.lazy(() =>
  import("../pages/notification/Notification")
);
const Settings = React.lazy(() => import("../pages/settings/Settings"));
const OfferDetails = React.lazy(() =>
  import("../pages/offerDetails/OfferDetails")
);
const ReportsDetails = React.lazy(() =>
  import("../pages/reportsDetails/ReportsDetails")
);

// eslint-disable-next-line react/prop-types
const ProidectedRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.user);

  if (userInfo === null) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

const Layout = () => {
  const [mobile, setMobile] = useState(false);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (window.innerWidth <= 900) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    // Apply dynamic styles to the body element
    document.body.style.setProperty(
      "--primary-color",
      userInfo.color1 ? userInfo.color1 : "#ef102a"
    );
    document.body.style.setProperty(
      "--transparnt-primary-color",
      userInfo.color1 ? `${userInfo.color1}77` : "#ef102a77"
    );
    document.body.style.setProperty(
      "--second-color",
      userInfo.color2 ? userInfo.color2 : "#fff2d8"
    );
  }, []);

  return mobile ? (
    <Fragment>
      {!location.pathname.includes("login") &&
        !location.pathname.includes("register") && <Navigation />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense fallback={<Loader />}>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <Profile />
              </ProidectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/record-reports"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <RecordReports />
              </ProidectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/notification"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <Notification />
              </ProidectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/settings"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <Settings />
              </ProidectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/offers/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <OfferDetails />
              </ProidectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/reports/:id"
          element={
            <Suspense fallback={<Loader />}>
              <ProidectedRoute>
                <ReportsDetails />
              </ProidectedRoute>
            </Suspense>
          }
        />
      </Routes>
    </Fragment>
  ) : (
    <p className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      being processing now
    </p>
  );
};

export default Layout;
