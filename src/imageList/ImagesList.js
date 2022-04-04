import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

/* import pic1 from "../img/a_a.png";
import pic2 from "../img/a_b.png"; */
/* import pic3 from "../img/a_c.png"; */
import pic4 from "../img/a_d.png";
/* import pic5 from "../img/a_e.png";
import pic6 from "../img/a_f.png"; */
/* import pic7 from "../img/a_g.png"; */

const CardView = () => {
  return (
    <>
      <div className="player">
        <Grid>
          <CardContent style={{ border: "3spx solid black" }}>
            <CardMedia height="500" component="img" image={pic4} />

            <Typography>Hallo</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">AAA</Button>
            <Button size="large">BBB</Button>
            <Button size="medium">CCC</Button>
          </CardActions>
          <Card></Card>
        </Grid>{" "}
      </div>
    </>
  );
};

export default CardView;
