import React /* , { useState, useEffect } */ from "react";
import "./App.css";
/* import axios from "axios";
import Header from "./ui/Header";
import ProjectsGrid from "./ui/ProjectsGrid"; */
import Nav from "./ui/Nav";
import ImagesList from "./imageList/ImagesList";
import Container from "@mui/material/Container";
import Uploads from "./upload/Uploads";

const App = () => {
  return (
    <Container maxWidth="xl" sx={{ textAlign: "center", mt: "3rem" }}>
      <Nav />
      <Uploads />
      <br />
      <br />
      <ImagesList />
    </Container>
  );
};

export default App;
