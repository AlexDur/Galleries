//TODO: When link in menubar clicked, circle shape should be maintained until another link is clicked
//TODO Not only link (the term) should be clickable, but also the whole element
//TODO When link (the term) is clicked, the color should not turn the hyperlink blue, but e.g. black

import * as React from "react";

import teppich1 from "../img/teppich1.png";
import teppich2 from "../img/teppich2.png";
import teppich3 from "../img/teppich3.png";
import teppich4 from "../img/teppich4.png";
import teppich5 from "../img/teppich5.png";
import teppich6 from "../img/teppich6.png";
import werkstatt1 from "../img/werkstatt1.png";

const images = [
  {
    img: teppich1,
    artist_year: "GUNTA STÖLZL, 1927 - 1928",
    work_title: "Sclitzgobelin Rot-Grün",
  },
  {
    img: teppich2,
    artist_year: "BENITA KOCH-OTTE, 1923",
    work_title: "Fünf Chöre",
  },

  {
    img: teppich3,
    artist_year: "GUNTA STÖLZL, 1926",
    work_title: "plate 111",
  },

  {
    img: teppich4,
    artist_year: "GUNTA STÖLZL, 1927",
    work_title: "Design für ein Jacquard gewebten Wandbehang ",
  },
  {
    img: teppich5,
    artist_year: "LIS BEYER-VOGLER, 1928",
    work_title: "Bauhaus-Kleid",
  },
  {
    img: teppich6,
    artist_year: "OTTI BERGER, 1931",
    work_title: "Unbekannt",
  },
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
                  <td>Otti Berger</td>
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
        </div>
        <div className="grid-item-5"></div>
      </div>
      <div className="image_container2">
        {images.map(image => (
          <div className="card">
            <img className="images_2" src={image.img} alt={image.work_title} />
            <div>{image.artist_year}</div>
            <div>{image.work_title}</div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Weberei;
