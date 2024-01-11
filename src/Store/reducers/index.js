import { combineReducers } from "redux";
import LoadingReducer from "./LoadingReducer";
import Theme from "./Theme";
import UIReducer from "./UIReducer";
import Language from "./Language";
import Resume from "./Resume";

export default combineReducers({
  loading: LoadingReducer,
  UI: UIReducer,
  theme: Theme,
  language : Language,
  resume : Resume,
});
