import { CLOSE_SIDE_MENU, HEADER_OFF, HEADER_ON, OPEN_SIDE_MENU } from "../actions/types";

const initialState = {
  sideMenu : false,
  headerShow : false
};

const UIReducer = function (state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        sideMenu : true,
      };
      case CLOSE_SIDE_MENU:
      return {
        ...state,
        sideMenu : false,
      };
      case HEADER_ON:
        return {
          ...state,
          headerShow : true,
        };
        case HEADER_OFF:
        return {
          ...state,
          headerShow : false,
        };
    default:
      return state;
  }
};

export default UIReducer;
