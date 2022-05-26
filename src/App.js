import Navbar from "./components/navbar/Navbar";
import Appliancelist from "./components/appliance/Appliancelist";
import Locationslist from "./components/locations/Locationslist";
import { Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <Grid container spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Locationslist />
          </Grid>
          <Grid item xs={8}>
            <Appliancelist />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
