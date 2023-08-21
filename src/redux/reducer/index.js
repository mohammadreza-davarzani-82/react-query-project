import ThemeProvider from "./theme";
import { combineReducers } from "redux";


const allReducers = combineReducers({
    theme: ThemeProvider,
})

export default allReducers