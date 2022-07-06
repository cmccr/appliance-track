import React from "react";
import { gql, useMutation } from "@apollo/client";
import Button from "@mui/material/Button";

const AddNewHomeMutation = gql`
  mutation AddNewHome(
    $address1: String!
    $city: String!
    $imgUrl: String!
    $id: String!
  ) {
    insert_prod_location(
      objects: {
        address1: $address1
        address2: ""
        city: $city
        imgURL: $imgUrl
        label: $label
        state: $state
        zip: $zip
        account_id: 1
        id: $id
      }
    ) {
      returning {
        address1
        account_id
      }
    }
  }
`;

function AddNewHome(props) {
  const [mutateFunction, { data, error }] = useMutation(AddNewHomeMutation, {
    variables: {
      address1: props.address1,
      address2: props.address2,
      city: props.city,
      imgUrl: props.imgUrl,
      label: props.label,
      state: props.state,
      zip: props.zip,
      id: props.id,
    },
  });
  return (
    <div className="">
      <Button variant="contained" onClick={mutateFunction}>
        Add Property
      </Button>
    </div>
  );
}

export default AddNewHome;
