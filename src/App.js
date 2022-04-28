import React /* , { useState, useEffect } */ from "react";
import "./App.css";
/* import axios from "axios";
import Header from "./ui/Header";
import ProjectsGrid from "./ui/ProjectsGrid"; */
import Nav from "./ui/Nav";
/* import Video from "./imageList/Video"; */
import Container from "@mui/material/Container";
/* import Uploads from "./upload/Uploads"; */

const App = () => {
  return (
    <Container maxWidth="xxl" sx={{ textAlign: "center", mt: "3rem" }}>
      <Nav />

      <br />
      <br />
      {/*    <Video /> */}
    </Container>
  );
};

export default App;
