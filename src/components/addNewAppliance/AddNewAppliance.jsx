import React from "react";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";

const AddNewApplianceMutation = gql`
  mutation AddNewApplianceMutation(
    $location_id: bigint
    $label: String!
    $description: String
    $manufacturer: String
    $serial_number: String
    $maintenence_plans: String
  ) {
    insert_prod_appliance(
      objects: {
        location_id: $location_id
        label: $label
        description: $description
        manufacturer: $manufacturer
        serial_number: $serial_number
        maintenence_plans: $maintenence_plans
      }
    ) {
      returning {
        label
        manufacturer
        serial_number
      }
    }
  }
`;

function AddNewAppliance(props) {
  const [mutateFunction] = useMutation(AddNewApplianceMutation, {
    variables: {
      label: props.label,
      manufacturer: props.manufacturer,
      serialNumber: props.serialNumber,
      location_id: props.location_id,
    },
  });
  return (
    <div className="new-appliance">
      <Button variant="contained" onClick={mutateFunction}>
        Add Appliance
      </Button>
    </div>
  );
}

export default AddNewAppliance;
