import Locationcard from "./Locationcard";
import CustomData from "../../data/location.json";
import React, { useState } from "react";
import Appliancelist from "../appliance/Appliancelist";

// export default function Locationslist() {
//   return CustomData.map((e) => {
//     return <Locationcard key={e.id} location={e} />;
//   });
// }

export default function Locationlist() {
  const [currentprop, setCurrentProp] = useState(0);

  return (
    <div className="location-appliance">
      <div className="property-map">
        {CustomData.map((e) => {
          return (
            <Locationcard
              key={e.id}
              location={e}
              setCurrentProp={setCurrentProp}
            />
          );
        })}
      </div>

      <Appliancelist currentprop={currentprop} />
    </div>
  );
}
