import * as React from "react";
import boxing_ibf from "../img/boxing_ibf.png";
import Video from "../imageList/Video";

export default function Nav() {
  return (
    <React.Fragment>
      <div className="pagina">
        <div id="phrase">
          Who will be the&nbsp;
          <span style={{ color: "red" }}>G</span>
          reatest&nbsp;
          <span style={{ color: "red" }}>O</span>f&nbsp;
          <span style={{ color: "red" }}>A</span>
          ll&nbsp;
          <span style={{ color: "red" }}>T</span>ime?
        </div>
        <img className="icon" src={boxing_ibf} alt="IBF icon" />
        <Video />
      </div>
    </React.Fragment>
  );
}
