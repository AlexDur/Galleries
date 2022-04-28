import * as React from "react";
/* import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton"; */
/* import Typography from "@mui/material/Typography"; */
/* import Tooltip from "@mui/material/Tooltip"; */
/* import PersonAdd from "@mui/icons-material/PersonAdd"; */
/* import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Terrain from "@mui/icons-material/Terrain";
import { Button } from "@material-ui/core";
import profil_A from "../img/profile_Alex.png"; */
import boxing_ibf from "../img/boxing_ibf.png";

export default function Nav() {
  return (
    <React.Fragment>
      <div id="phrase">
        Who will be the&nbsp;
        <span style={{ color: "red" }}>G</span>
        reatest&nbsp;
        <span style={{ color: "red" }}>O</span>f&nbsp;
        <span style={{ color: "red" }}>A</span>
        ll&nbsp;
        <span style={{ color: "red" }}>T</span>ime?
      </div>
      <img
        style={{ width: 100, marginTop: 50 }}
        src={boxing_ibf}
        alt="IBF icon"
      />
    </React.Fragment>
  );
}
