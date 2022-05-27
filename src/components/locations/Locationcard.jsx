import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import store from "../../store/app";

function Locationcard(props) {
  function setPropertyId() {
    store.dispatch({
      type: "setLocation",
      location_id: props.location.id,
    });
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={setPropertyId}>
        <CardMedia
          component="img"
          height="140"
          image={props.location.imgurl}
          alt="property image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.location.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.location.street1}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Locationcard;
