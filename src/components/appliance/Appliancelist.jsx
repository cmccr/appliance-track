// import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import Button from "@mui/material/Button";

function SimpleAccordion(props) {
  const { currentProp } = props;
  useEffect(() => {}, [currentProp]);

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
        <Button variant="contained">Add Appliance</Button>
      </div>
    </div>
  );
}

export default SimpleAccordion;
