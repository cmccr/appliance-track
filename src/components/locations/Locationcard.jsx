import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActions } from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
// import store from "../../store/app";

function Locationcard(props) {
  const { setCurrentProp, location } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => setCurrentProp(location)}>
        <CardMedia
          component="img"
          height="140"
          image={props.location.imgURL}
          alt="property image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.location.label}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.location.address1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Locationcard;
