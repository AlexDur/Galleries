import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
/* import Typography from "@mui/material/Typography"; */
import Tooltip from "@mui/material/Tooltip";
/* import PersonAdd from "@mui/icons-material/PersonAdd"; */
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Terrain from "@mui/icons-material/Terrain";
import { Button } from "@material-ui/core";
import profil_A from "../img/profile_Alex.png";

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  profil_A = null;

  return (
    <React.Fragment>
      <h1 style={{ fontFamily: "'Rubik Wet Paint', cursive" }}>
        {" "}
        Released from hell
      </h1>
    </React.Fragment>
  );
}
