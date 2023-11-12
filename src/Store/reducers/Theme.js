import {
  SWITCH_DARK,
  SWITCH_LIGHT,
} from "../actions/types";

import { light, dark } from '../../Helpers/Theme';


const initialState = {
  Theme: light,
};



const Theme = function (state = initialState , action) {
  switch (action.type) {
    case SWITCH_LIGHT:
      return {
        ...state,
        Theme: light,
      };
    case SWITCH_DARK:
      return {
        ...state,
        Theme: dark,
      };
    default:
      return state;
  }
};

export default Theme;
