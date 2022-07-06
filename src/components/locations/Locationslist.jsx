import Locationcard from "./Locationcard";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddNewHome from "../addNewHome/AddNewHome";

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

function Locationslist(props) {
  const { handleClick } = props;
  const { data } = useQuery(getLocationQuery);
  const [newProperty, setNewProperty] = useState({});

  const handleFormUpdate = (event) => {
    const data = { ...newProperty, [event.target.id]: event.target.value };
    setNewProperty(data);
    console.log(newProperty);
  };
  return (
    <div className="location-appliance">
      <div className="property-map">
        {data?.prod_location.map((e) => {
          return (
            <Locationcard
              key={e.id}
              location={e}
              setCurrentProp={handleClick}
            />
          );
        })}
      </div>
      <Grid item md={8}>
        <div>
          <input
            type="text"
            id="id"
            placeholder="id"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="address1"
            placeholder="address1"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="city"
            placeholder="city"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="imgUrl"
            placeholder="imgUrl"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="label"
            placeholder="label"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="state"
            placeholder="state"
            onChange={handleFormUpdate}
          />
          <input
            type="text"
            id="zip"
            placeholder="zip"
            onChange={handleFormUpdate}
          />
        </div>
        <AddNewHome
          id={newProperty.id}
          address1={newProperty.address1}
          city={newProperty.city}
          imgUrl={newProperty.imgUrl}
          label={newProperty.label}
          state={newProperty.state}
          zip={newProperty.zip}
        />
      </Grid>
    </div>
  );
}

export default Locationslist;
