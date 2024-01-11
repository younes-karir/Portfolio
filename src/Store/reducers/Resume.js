import {
    SWITCH_INITIAL,
  SWITCH_TO_CE,
  SWITCH_TO_ED,
  SWITCH_TO_EX,
} from "../actions/types";

const initialState = {
  selected: "ex",
};

const Resume = function (state = initialState, action) {
  switch (action.type) {
    case SWITCH_TO_EX:
      return {
        ...state,
        selected: "ex",
      };
    case SWITCH_TO_ED:
      return {
        ...state,
        selected: "ed",
      };
    case SWITCH_TO_CE:
      return {
        ...state,
        selected: "aw",
      };

      case SWITCH_INITIAL:
        return {
          ...state,
          selected: "ex",
        };

    default:
      return state;
  }
};

export default Resume;
