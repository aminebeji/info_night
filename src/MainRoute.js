import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quizz from "./pages/Quizz";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quizz" element={<Quizz />} />

    </Routes>
  );
}

export default MainRoute;
