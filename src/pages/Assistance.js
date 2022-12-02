import React, { useEffect, useState } from "react";
import { google } from "google-maps";
import "../styles/Assistance.css";
import NavbarComponent from "../components/NavbarComponent";
import DoctorsComponent from "../components/Assistance/DoctorsComponent";

import FooterComponent from "../components/FooterComponent";
function Home() {
  //   const service = new google.maps.places.PlacesService();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [list, setList] = useState([]);
  useEffect(() => {
    // AIzaSyB65Zantx6o9T4bZVj10LXuUWKFmf5wk28
    navigator.geolocation.getCurrentPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
      console.log("l and l done");
    });
    const request = {
      query: "Hospital",
      fields: ["name", "geometry"],
    };
  }, []);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=restaurant&location=${latitude}%2C${longitude}&type=restaurant&radius=10000&key=AIzaSyB65Zantx6o9T4bZVj10LXuUWKFmf5wk28`
    )
      .then((response) => response.json())
      .then((res) => setList(res.results))
      .catch((err) => console.log(err));
  }, [latitude]);
  return (
    <div className="doctors">
      <NavbarComponent />
      <DoctorsComponent />
      <FooterComponent />
    </div>
  );
}

export default Home;
