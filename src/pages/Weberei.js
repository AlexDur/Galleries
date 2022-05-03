import * as React from "react";

/* import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; */

/* import Container from "@mui/material/Container"; */

import teppich1 from "../img/teppich1.png";
import teppich2 from "../img/teppich2.png";
import teppich3 from "../img/teppich3.png";
import teppich4 from "../img/teppich4.png";
import werkstatt1 from "../img/werkstatt1.png";

const Weberei = () => {
  return (
    <>
      <div className="container">
        <div className="page_container">
          <div className="intro-text">
            <h1>Weberei</h1> <h4>1919-1933</h4>
            <p>
              Die Weberei bestand zunächst in Weimar und ab 1925 in Dessau. Hier
              wurden sowohl traditionell handwerkliche als auch industrielle
              Webtechniken erprobt. Sie war eine der erfolgreichsten und
              produktivsten Werkstätten am Bauhaus.
            </p>
          </div>
          <div className="image_container">
            <img src={werkstatt1} alt="Werkstatt" />
            <h4 style={{ textAlign: "left" }}>Textilwerkstatt in Dessau</h4>
          </div>
          <div className="grid-item-3">
            <div className="text-gi3">
              <h3 style={{ fontWeigth: 800 }}>Meister/innen</h3>
              <span>Anna Hans</span>{" "}
            </div>
          </div>
          {/* <div className="card" style={{ width: 240, marginBottom: 100 }}>
            <img src={teppich1} alt="Stölzl, Element, 1927" />
            <div className="card-body">
              <h5 className="card-title">Gunta Stölzl, 1927 </h5>
              <p className="card-text">Element </p>
            </div>
          </div> */}

          {/* <img
            style={{ widht: 300, height: 300 }}
            src={teppich3}
            alt="Teppich_Anna Stölzl"
          /> */}
          {/*           <img
            style={{ widht: 300, height: 300 }}
            src={teppich2}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich4}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich4}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich4}
            alt="Teppich_Anna Stölzl"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Weberei;
