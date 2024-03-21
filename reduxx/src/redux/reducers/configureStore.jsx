import { createStore } from "redux";
import reducers from "./index.jsx";

export default function configureStore() {
  return createStore(reducers);
}
