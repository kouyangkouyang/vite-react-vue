import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import locale from "antd/locale/zh_CN.js";
import { ConfigProvider } from "antd";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={locale}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>
);
