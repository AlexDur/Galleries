import React from "react";
import keramik1 from "../img/keramik1.png";
import keramik2 from "../img/keramik2.png";
import keramik3 from "../img/keramik3.png";

const Keramik_Werkstatt = () => {
  return (
    <>
      <div className="container">
        <div className="page_container">
          <p>
            {" "}
            Walter Gropius , Gründer und Leiter des Weimarer Bauhauses, richtete
            1920
            <span style={{ fontSize: 25 }}> die Keramikwerkstatt </span>seiner
            Kunstschule in Dornburg ein. Für den externen Standort sprachen die
            Existenz einer traditionsgebundenen Töpferwerkstatt, mit Max Krehan
            ein Töpfer, der bereit war, die handwerkliche Ausbildung zu leiten,
            und mit dem leer stehenden Marstall ein in Landesbesitz vorhandenes
            Gebäude. Gerhard Marcks wurde als Formmeister berufen. Die
            Geschichte der Bauhaus-Töpferei währte nur knapp fünf Jahre, aber in
            dieser Zeit wurde hier unter einfachsten Bedingungen eine neue
            Gefäßästhetik von europäischem Rang entwickelt. Viele der
            bedeutendsten deutschen Keramiker des 20. Jahrhunderts haben hier
            ihre Ausbildung absolviert: Theodor Bogler , Otto Lindig ,
            Marguerite Friedlaender , Werner Burri , Johannes Driesch , Franz
            Rudolf Wildenhain .
          </p>
          <br />
          <p>
            Vorläufer der Weberei war eine Frauenklasse, die 1919 geschaffen
            wurde, um die zahlreichen Frauen unterzubringen, die sich um
            Aufnahme ins Bauhaus beworben hatten. Seitens des Bauhauses war es
            nicht vorgesehen, alle Ausbildungsplätze zur Hälfte mit Frauen und
            Männern zu belegen. 1920 wurde die Frauenklasse in die Klasse für
            Textil überführt. In sie konnten auch Männer eintreten, was aber die
            Ausnahme blieb. Oskar Schlemmer spottete über die Weberei
            folgendermaßen:
          </p>
          <br />

          <img
            style={{ widht: 300, height: 300 }}
            src={keramik1}
            alt="Teppich_Anna Stölzl"
          />

          <img
            style={{ widht: 300, height: 300 }}
            src={keramik2}
            alt="Teppich_Anna Stölzl"
          />

          <img
            style={{ widht: 300, height: 300 }}
            src={keramik3}
            alt="Teppich_Anna Stölzl"
          />
        </div>
      </div>
    </>
  );
};
export default Keramik_Werkstatt;
