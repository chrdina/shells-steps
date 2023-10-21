import React from "react";
import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Countries from "./pages/countries.js";
import Trips from "./pages/trips";
import Trip from "./pages/trip";
import Country from "./pages/country";
import Map from "./pages/map";
import NavBar from "./components/navBar";

const App = () => {
  const handleFirstTab = (e) => {
    if (e.keyCode === 9) {
      // the "I am a keyboard user" key
      document.body.classList.add("user-is-tabbing");
      console.log("User is tabbing");
      window.removeEventListener("keydown", handleFirstTab);
    }
  };

  window.addEventListener("keydown", handleFirstTab);

  console.log(window.location);
  return (
    <>
      <Router basename="/">
        <div id="top"></div>

        <NavBar navLinks={["Home", "Trips", "Countries", "Map"]} />

        <div className="container-main">
          <Routes>
            <Route path="/" end element={<Index />} />
            <Route path="/trips/" end element={<Trips />} />
            <Route path="/trips/:id" element={<Trip />} />
            <Route path="/countries/" end element={<Countries />} />
            <Route path="/countries/:id" element={<Country />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
