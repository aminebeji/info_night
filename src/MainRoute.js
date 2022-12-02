import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";
import Assistance from "./pages/Assistance";

function MainRoute() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/assistance" element={<Assistance />} />
      <Route exact path="/quizz" element={<Quizz />} />
    </Routes>
  );
}

export default MainRoute;
