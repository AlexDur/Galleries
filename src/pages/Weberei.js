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
          <div className="card" style={{ width: 240, marginBottom: 100 }}>
            <img src={teppich1} alt="Stölzl, Element, 1927" />
            <div className="card-body">
              <h5 className="card-title">Gunta Stölzl, 1927 </h5>
              <p className="card-text">Element </p>
            </div>
          </div>
          <p>
            {" "}
            <span style={{ fontSize: 25 }}>Die Werkstatt für Weberei</span>,
            auch als Textilwerkstatt bezeichnet, war eine Werkstatt am
            Staatlichen Bauhaus.Sie bestand von 1919 bis 1933, zunächst in
            Weimar und ab 1925 in Dessau. In der Werkstatt wurden überwiegend
            Frauen ausgebildet. Sie war eine der erfolgreichsten und
            produktivsten Werkstätten am Bauhaus.
          </p>
          <div className="card" style={{ width: 240, marginBottom: 100 }}>
            <img src={werkstatt1} alt="Werkstatt" />
            <div className="card-body">
              <h5 className="card-title">Textilwerkstatt in Dessau</h5>
            </div>
          </div>
          <img
            style={{ widht: 600, height: 600 }}
            src={werkstatt1}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich1}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich3}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich2}
            alt="Teppich_Anna Stölzl"
          />
          <img
            style={{ widht: 300, height: 300 }}
            src={teppich4}
            alt="Teppich_Anna Stölzl"
          />
        </div>
      </div>
    </>
  );
};

export default Weberei;
