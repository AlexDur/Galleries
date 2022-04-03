import * as React from "react";
/* import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"; */

/* import "./App.css"; */

import ReactPlayer from "react-player";

/* import pic1 from "../img/a_a.png";
import pic2 from "../img/a_b.png";
import pic3 from "../img/a_c.png";
import pic4 from "../img/a_d.png";
import pic5 from "../img/a_e.png";
import pic6 from "../img/a_f.png";
import pic7 from "../img/a_g.png"; */

import myVideo from "../video/goat_fight.mp4";

const Video = () => {
  return (
    <div className="player">
      <ReactPlayer controls url={myVideo} />
    </div>
  );
};

export default Video;
