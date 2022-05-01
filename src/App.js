//Introduce axios with useState and useEffect to avoid reloading of the whole page when new route is clicked in the menu bar ??

//Why is "Link" not working in the "li" element?

import React /* , { useState, useEffect } */ from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Nav from "./ui/Nav";
import Container from "@mui/material/Container";
import axios from "axios";

import Weberei from "./pages/Weberei";
import Architekur from "./pages/Architektur";
import Wandmalerei from "./pages/Wandmalerei";
import Möbelwerkstatt from "./pages/Möbelwerkstatt";

/* import teppich1 from "./img/teppich1.png"; */

const App = () => {
  return (
    <>
      <div className="container">
        <li id="title" style={{ color: "black" }}>
          {" "}
          bauhaus
        </li>
        {/* <img src={teppich1} alt="logo" /> */}
        <li>Architektur</li>
        <li>Keramik Werkstatt</li>
        <li>Möbelwerkstatt</li>
        <li>Wandmalerei</li>
        {/*   <li>
          <Link to="/weberei" element={<Weberei />}>
            Weberei
          </Link>
        </li> */}
      </div>

      <Container maxWidth="xxl" sx={{ textAlign: "center", mt: "3rem" }} />
      {/* 
      <nav>
        <ul>
          <li>
            <a href="/weberei">Architektur</a>
          </li>
          <li>Keramik Werkstatt</li>
          <li>Möbelwerkstatt</li>
          <li>Wandmalerei</li>
          <li>
            <a href="/weberei">Weberei</a>
          </li>
        </ul>
      </nav> */}
      {/*  <ImagesList /> */}
      <Router>
        <div>
          <Routes>
            {/* <Route exact path="/" component={Nav} /> */}
            <Route path="/architektur" component={Architekur} />
            <Route path="/möbelwerkstatt" component={Möbelwerkstatt} />
            <Route path="/weberei" component={Weberei} />
            <Route path="/wandmalerei" component={Wandmalerei} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
