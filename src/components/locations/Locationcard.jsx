import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { CardActions } from "@mui/material/CardActions";
import { CardActionArea } from "@mui/material";
// import store from "../../store/app";
const defaultData = {
  address1: "4608 S 2675 W",
  address2: null,
  city: "Roy",
  country: "United States of America",
  id: 2,
  label: "Roy Prop",
  created_at: "2022-06-12T03:51:22.075107+00:00",
  appliances: [
    {
      location: {
        id: 2,
      },
    },
    {
      location: {
        id: 2,
      },
    },
    {
      location: {
        id: 2,
      },
    },
  ],
};

function Locationcard(props) {
  function setPropertyId(setPropertyId) {
    console.log("clicked:", props.location);
  }

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
