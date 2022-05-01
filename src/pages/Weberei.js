import * as React from "react";

/* import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid"; */

import teppich1 from "../img/teppich1.png";

const Weberei = () => {
  return (
    <>
      <div style={{ color: "black", top: 300 }}>Weberei</div>;
      <img src={teppich1} alt="logo" />
      <p>
        {" "}
        <span style={{ fontSize: 25 }}>Die Werkstatt für Weberei</span>, auch
        als Textilwerkstatt bezeichnet, war eine Werkstatt am Staatlichen
        Bauhaus. Sie bestand von 1919 bis 1933, zunächst in Weimar und ab 1925
        in Dessau. In der Werkstatt wurden überwiegend Frauen ausgebildet. Sie
        war eine der erfolgreichsten und produktivsten Werkstätten am Bauhaus.
        <p></p>
        Vorläufer der Weberei war eine Frauenklasse, die 1919 geschaffen wurde,
        um die zahlreichen Frauen unterzubringen, die sich um Aufnahme ins
        Bauhaus beworben hatten. Seitens des Bauhauses war es nicht vorgesehen,
        alle Ausbildungsplätze zur Hälfte mit Frauen und Männern zu belegen.
        1920 wurde die Frauenklasse in die Klasse für Textil überführt. In sie
        konnten auch Männer eintreten, was aber die Ausnahme blieb. Oskar
        Schlemmer spottete über die Weberei folgendermaßen:
      </p>
    </>
  );
};

export default Weberei;
