import React from "react";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";

const AddNewHomeMutation = gql`
  mutation AddNewHome(
    $address1: String
    $address2: String
    $city: String
    $imgURL: String
    $state: String
    $label: String!
    $zip: String
  ) {
    insert_prod_location(
      objects: {
        address1: $address1
        address2: ""
        city: $city
        imgURL: $imgURL
        label: $label
        state: $state
        zip: $zip
        account_id: 1
      }
    ) {
      returning {
        imgURL
        label
        address1
        id
        account_id
      }
    }
  }
`;

function AddNewHome(props) {
  const [mutateFunction] = useMutation(AddNewHomeMutation, {
    variables: {
      address1: props.address1,
      address2: props.address2,
      city: props.city,
      imgUrl: props.imgUrl,
      label: props.label,
      state: props.state,
      zip: props.zip,
    },
  });
  return (
    <div className="new-property">
      <Button variant="contained" onClick={mutateFunction}>
        Add Property
      </Button>
    </div>
  );
}

export default AddNewHome;
