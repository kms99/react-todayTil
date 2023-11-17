import { combineReducers, createStore } from "redux";
import TilList from "../modules/TilList";
import Theme from "../modules/Theme";

const reducers = combineReducers({ Theme, TilList });
const store = createStore(reducers);

export default store;
