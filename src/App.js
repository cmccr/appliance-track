import Navbar from "./components/navbar/Navbar";
import Locationslist from "./components/locations/Locationslist";
import { Grid } from "@mui/material";
import "./App.css";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://actual-gecko-51.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query MyQuery {
        prod_location {
          appliances {
            label
            id
            description
            manufacturer
            serial_number
          }
          id
          label
        }
      }
    `,
  })
  .then((result) => console.log(result));

const appliance_info = gql`
  query MyQuery {
    prod_location {
      appliances {
        label
        id
        description
        manufacturer
        serial_number
      }
      id
      label
    }
  }
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <Grid container spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Locationslist />
            </Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Grid>
      </div>
    </ApolloProvider>
  );
}

export default App;
