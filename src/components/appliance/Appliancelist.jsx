import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import AddNewAppliance from "../addNewAppliance/AddNewAppliance";

function SimpleAccordion(props) {
  const { currentProp } = props;
  const [newAppliance, setNewAppliance] = useState({});
  useEffect(() => {}, [currentProp]);

  const handleFormUpdate = (event) => {
    const applianceData = {
      ...newAppliance,
      [event.target.id]: event.target.value,
    };
    setNewAppliance(applianceData);
  };

  return (
    <div>
      <div>
        {" "}
        {currentProp.appliances.map((appliance) => {
          return (
            <Accordion key={appliance.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel1a-header"
              >
                <Typography>{appliance.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {appliance.manufacturer}
                  <br />
                  {appliance.serial_number}
                  <br />
                  {appliance.description}
                  <br />
                  {appliance.maintenence_plans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
        <div>
          <Grid item md={4}>
            <input
              type="text"
              id="label"
              placeholder="label"
              onChange={handleFormUpdate}
            />
            <input
              type="text"
              id="manufacturer"
              placeholder="manufacturer"
              onChange={handleFormUpdate}
            />
            <input
              type="text"
              id="serial_number"
              placeholder="serial_number"
              onChange={handleFormUpdate}
            />
            <AddNewAppliance
              location_id={currentProp.id}
              label={newAppliance.label}
              description={newAppliance.description}
              manufacturer={newAppliance.manufacturer}
              serial_number={newAppliance.serial_number}
              maintenence_plans={newAppliance.maintenence_plans}
            />
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default SimpleAccordion;
