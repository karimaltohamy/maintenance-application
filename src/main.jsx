import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n.js";
import { I18nextProvider } from "react-i18next";
import store from "./store/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <App />
        </Provider>
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
