// resources/js/utils/initialize.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import apiAxios from "./utils/apiAxios";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPILoNEbdG-375eDpzMqRXlqhfMDbvI5U",
  authDomain: "maintenance-2219c.firebaseapp.com",
  projectId: "maintenance-2219c",
  storageBucket: "maintenance-2219c.appspot.com",
  messagingSenderId: "1068888839256",
  appId: "1:1068888839256:web:219cbdccfb10cbb1c0a62d",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (
    permission == "granted" &&
    !location.pathname.includes("/login") &&
    !location.pathname.includes("/register")
  ) {
    const token = await getToken(messaging, {
      vapidKey:
        "BLX5jpgOymmPf5bxWLmAotzHBnBHGVqTrei6qSAurYHoi8g0WybWbmErHnU8Wj6eXhVEE8kzVqAzX4LQavJ44uA",
    });
    await apiAxios.put("/fcm_token", {
      token,
    });
  }
};

export default app;
