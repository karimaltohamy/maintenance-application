// resources/js/utils/initialize.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import apiAxios from "./utils/apiAxios";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5akO6Vuczy_Wllbr2Y92jnLHgwkp2dg",
  authDomain: "maintenance-68e51.firebaseapp.com",
  projectId: "maintenance-68e51",
  storageBucket: "maintenance-68e51.appspot.com",
  messagingSenderId: "676097070554",
  appId: "1:676097070554:web:6b8349adf59c4ba36e5ce3",
  measurementId: "G-1LZ8PEGBCQ",
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
        "BCEJXqFS176teaIkdGxx4j0SbhUTVf0prwDVl40nqM5L71s_POoG4c3iVcGlvHWZPH7s5DzCn5zltB96iCnWdYY",
    });
    await apiAxios.put("/fcm_token", {
      token,
    });
  }
};

export default app;
