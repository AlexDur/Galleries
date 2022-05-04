/* Aufgabe: Anorden der Bilder horizontal ohne alles darüber zu verschieben */

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

const images = [
  {
    img: teppich1,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },
  {
    img: teppich2,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },

  {
    img: teppich3,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },

  {
    img: teppich4,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },

  /* {
    img: teppich1,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },

  {
    img: teppich1,
    artist_year: "Annis Albin, 1932-1933",
    work_title: "Utopie",
  },  */
];

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
            <h4 style={{ textAlign: "left" }}>
              Werkstattraum der Weberei am Bauhaus in Weimar, Foto: unbekannt,
              um 1923.{" "}
            </h4>
          </div>
          <div className="grid-item-3">
            <div className="text-gi3">
              <h1>Meister/innen</h1>
              <table>
                <tr>
                  <td>Johannes Itten</td>
                  <td>Georg Muche</td>
                  <td>Gunta Stölzl </td>
                </tr>
                <br />
                <tr>
                  <td>Lilly Reich</td>
                  <td>Anni Albers</td>
                  <td>Otti Berger</td>
                </tr>
              </table>
              <br />
              <h1>Bekannte Schülerinnen</h1>
              <table>
                <tr>
                  <td>Anni Albers</td>
                  <td>Gertrud Arndt</td>
                  <td>Otti Berger </td>
                </tr>
                <br />
                <tr>
                  <td>Lis Beyer-Volger</td>
                  <td>Ruth Hollós-Consemüller</td>
                  <td>Benita Koch-Otte</td>
                </tr>
                <tr>
                  <td>Lena Meyer-Bergner</td>
                  <td>Helene Nonné-Schmidt</td>
                  <td>Margaretha Reichardt</td>
                </tr>
              </table>
              {/*  <span>Anna Hans</span>{" "} */}
            </div>
          </div>
          <div className="grid-item-4">
            <div className="body-text">
              <p>
                Handwerkliche Leiterin war bis 1925 Helene Börner, die 1925 am
                Ende der Weimarer Zeit des Bauhauses ausschied. In Dessau
                übernahm Gunta Stölzl die Leitung der Werkstatt, der ab 1931
                Lilly Reich folgte. Formmeister der Werkstatt war ab 1919
                Johannes Itten und ab 1921 bis 1927 Georg Muche.{" "}
              </p>
              <p>
                In der Werkstatt für Weberei wurden traditionell handwerkliche
                und auch industrielle Webtechniken erprobt. Das Tätigkeitsziel
                der Werkstatt war nicht die Herstellung individueller und
                künstlerisch gestalteter Einzelstücke. Angestrebt wurde
                reproduzierbare Stoffe und Muster, so dass sich in der Werkstatt
                allmählich ein Wandel von der Handweberei zum Textildesign
                vollzog.
              </p>
              <p>
                {" "}
                Im Jahr 1920 war die Weberei mit sieben Gesellinnen und 14
                Lehrlingen die personell am stärksten besetzte Werkstatt des
                Bauhauses.
              </p>
            </div>
          </div>
          <h1 id="title_arbeiten">Arbeiten</h1>
          <div className="grid-item-5"></div>
          <div className="grid-item-6">
            {images.map(image => (
              <div className="image_container2">
                <img
                  className="images_2"
                  src={image.img}
                  alt={image.work_title}
                />
                <div className="artist_year">{image.artist_year}</div>
                <div className="work_title">{image.work_title}</div>
              </div>
            ))}
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
