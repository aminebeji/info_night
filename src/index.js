import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute";
import NavBar from "./sections/NavBar";
import DataProvider from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <DataProvider>
      <NavBar />
      <MainRoute />
    </DataProvider>
  </Router>
);
