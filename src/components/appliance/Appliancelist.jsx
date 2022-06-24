// import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";

function SimpleAccordion(props) {
  const { currentProp } = props;
  useEffect(() => {}, [currentProp]);

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Refigerator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {currentProp.appliances.map((appliance) => {
              return (
                <div>
                  {currentProp.address1}
                  {currentProp.id}
                  {appliance.manufacturer}
                </div>
              );
            })}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SimpleAccordion;
