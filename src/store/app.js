import { createStore } from "redux";

const store = createStore(selectedLocation);

function selectedLocation(state = { location_id: 0 }, action) {
  switch (action.type) {
    case "setLocation":
      return { location_id: action.location_id };
    case "clearLocation":
      return { location_id: null };
    default:
      return state;
  }
}

store.subscribe(() => console.log(store.getState()));

export default store;
