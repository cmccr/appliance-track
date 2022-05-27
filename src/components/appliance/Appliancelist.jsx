import React from "react";
import Appliancecard from "./Appliancecard";
import store from "../../store/app";
import CustomData from "../../data/appliances.json";

export default function Appliancelist() {
  return CustomData.filter((f) => {
    return f.location_id === store.getState().location_id;
  }).map((e) => {
    return <Appliancecard key={e.id} appliance={e} />;
  });
}
