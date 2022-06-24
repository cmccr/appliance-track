import Navbar from "./components/navbar/Navbar";
import Locationslist from "./components/locations/Locationslist";
import Appliancelist from "./components/appliance/Appliancelist";
import { Grid } from "@mui/material";
import "./App.css";
import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://actual-gecko-51.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

let selectedProp = null;

// const appliance_info = gql`
//   query MyQuery {
//     prod_location {
//       appliances {
//         label
//         id
//         description
//         manufacturer
//         serial_number
//       }
//       id
//       label
//     }
//   }
// `;

const defaultData = {
  address1: "4608 S 2675 W",
  address2: null,
  city: "Roy",
  country: "United States of America",
  id: 2,
  label: "Roy Prop",
  created_at: "2022-06-12T03:51:22.075107+00:00",
  imgURL:
    "https://appliance-track-files.nyc3.cdn.digitaloceanspaces.com/app/locations/2/roy_1",
  appliances: [
    {
      label: "Refrigerator",
      id: 2,
      description: null,
      manufacturer: "Samsung",
      serial_number: null,
    },
    {
      label: "Washer",
      id: 3,
      description: null,
      manufacturer: "LG",
      serial_number: null,
    },
    {
      label: "Dryer",
      id: 4,
      description: null,
      manufacturer: "LG",
      serial_number: null,
    },
  ],
};

function App() {
  const [currentProp, setCurrentProp] = useState(defaultData);
  const handleClick = (id) => {
    setCurrentProp(id);
    console.log(currentProp.id);
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Grid container spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Locationslist handleClick={handleClick} />
            </Grid>
            <Grid item xs={8}>
              <Appliancelist currentProp={currentProp} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ApolloProvider>
  );
}

export default App;
