//Introduce axios with useState and useEffect to avoid reloading of the whole page when new route is clicked in the menu bar ??

//Why is "Link" not working in the "li" element?

import React /* , { useState, useEffect } */ from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
/* import Container from "@mui/material/Container";
import axios from "axios"; */

import Weberei from "./pages/Weberei";
import Architekur from "./pages/Architektur";
import Wandmalerei from "./pages/Wandmalerei";
import Möbelwerkstatt from "./pages/Möbelwerkstatt";
import Keramikwerkstatt from "./pages/Keramik_Werkstatt";

/* import teppich1 from "./img/teppich1.png"; */

const App = () => {
  return (
    <>
      <Router>
        <nav>
          <div className="container">
            <li>
              <Link
                to="/"
                element={<Home />}
                id="title"
                style={{ color: "black", textDecoration: "none" }}
              >
                bauhaus
              </Link>
            </li>
            {/* <img src={teppich1} alt="logo" /> */}
            <li>
              <Link to="/architektur">Architektur</Link>
            </li>
            <li>
              <Link to="/keramikwerkstatt">Keramikwerkstatt</Link>
            </li>
            <li>
              <Link to="/moebelwerkstatt">Möbelwerkstatt</Link>
            </li>
            <li>
              <Link to="/wandmalerei">Wandmalerei</Link>
            </li>
            <li>
              <Link to="/weberei">Weberei</Link>
            </li>
          </div>
        </nav>

        {/* <Container maxWidth="xxl" sx={{ textAlign: "center", mt: "3rem" }} /> */}

        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/architektur" element={<Architekur />} />
            <Route path="/keramikwerkstatt" element={<Keramikwerkstatt />} />
            <Route path="/moebelwerkstatt" element={<Möbelwerkstatt />} />
            <Route path="/wandmalerei" element={<Wandmalerei />} />
            <Route path="/weberei" element={<Weberei />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
