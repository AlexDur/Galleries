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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  profil_A = null;
  const [currentUser, setCurrentUser] = React.useState({
    email: "alexdurach@gmail.com",
    displayName: "Alex",
    photoURL: profil_A,
  });
  return (
    <React.Fragment>
      <h1 style={{ fontFamily: "Bodoni Moda" }}> Schwarzwald Vibes</h1>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {!currentUser ? (
          <Button startIcon={<Terrain />}>Login</Button>
        ) : (
          <Tooltip title="Account settings">
            <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
              <Avatar
                sx={{ width: 54, height: 54 }}
                src={currentUser?.photoURL}
              >
                {currentUser?.displayName?.charAt(0)?.toUpperCase() ||
                  currentUser?.email?.charAt(0)?.toUpperCase()}
              </Avatar>
            </IconButton>
          </Tooltip>
        )}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar /> Profile
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
