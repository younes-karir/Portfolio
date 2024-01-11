import { DISPAY_LN} from "../actions/types";

const initialState = {
  acteul: "en",
};

const Language = function (state = initialState, action) {
  switch (action.type) {
    case DISPAY_LN:
      return {
        acteul: action.payload.data,
      }; 
    default:
      return state;
  }
};

export default Language;
