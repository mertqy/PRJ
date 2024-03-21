import { createStore } from "redux";
import rootReducer from "./index.jsx";

export default function configureStore() {
  return createStore(rootReducer);
}

