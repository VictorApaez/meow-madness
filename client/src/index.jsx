import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import Modal from "react-modal";

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
