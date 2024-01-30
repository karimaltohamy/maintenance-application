import "./App.scss";
import Layout from "./layout/Layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { generateToken, messaging } from "./firebase";
import { onMessage } from "firebase/messaging";
import { toast } from "react-toastify";

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (paylod) => {
      toast(paylod.data.body);
    });

    // theme mode
    if (localStorage.getItem("mode") == "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // default lang
    if (localStorage.getItem("lang") == "ar") {
      document.body.classList.add("ar");
      document.body.classList.remove("en");
    } else {
      document.body.classList.add("en");
      document.body.classList.remove("ar");
    }
  }, []);

  return <Layout />;
}

export default App;
