import Locationcard from "./Locationcard";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Grid from "@mui/material/Grid";
import AddBoxIcon from "@mui/icons-material/AddBox";

// export default function Locationslist() {
//   return CustomData.map((e) => {
//     return <Locationcard key={e.id} location={e} />;
//   });
// }

const getLocationQuery = gql`
  query MyQuery {
    prod_location {
      address1
      address2
      city
      country
      id
      label
      created_at
      imgURL
      appliances {
        label
        id
        description
        manufacturer
        serial_number
      }
    }
  }
`;

function Locationslist() {
  const [currentprop, setCurrentProp] = useState(0);
  const { data } = useQuery(getLocationQuery);
  return (
    <div className="location-appliance">
      <div className="property-map">
        {data?.prod_location.map((e) => {
          return (
            <Locationcard
              key={e.id}
              location={e}
              setCurrentProp={setCurrentProp}
            />
          );
        })}
      </div>
      <Grid item md={12}>
        <AddBoxIcon onClick={}>Two Tone</AddBoxIcon>
      </Grid>
    </div>
  );
}

export default Locationslist;
