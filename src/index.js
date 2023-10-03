import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./Style.css";
import "react-confirm-alert/src/react-confirm-alert.css";

import "font-awesome/css/font-awesome.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="students-management">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
