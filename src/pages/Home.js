import React, { useEffect } from "react";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/Home/HeaderComponent";
import NavbarComponent from "../components/NavbarComponent";
import QuizComponent from "../components/Home/QuizComponent";
import SidaComponent from "../components/Home/SidaComponent";
import SidaPreventionComponent from "../components/Home/SidaPreventionComponent";
import StoriesComponent from "../components/Home/StoriesComponent";
import "../styles/App.css";
function Home() {
  return (
    <header class="header">
      <NavbarComponent />
      <HeaderComponent />
      <br />
      <br />
      <SidaComponent />
      <SidaPreventionComponent />
      <StoriesComponent />
      <QuizComponent />
      <FooterComponent />
    </header>
  );
}

export default Home;
