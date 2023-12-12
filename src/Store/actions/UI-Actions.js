import { CHANGE_TO_DE, CHANGE_TO_EN, CHANGE_TO_FR, CLOSE_SIDE_MENU, HEADER_OFF, HEADER_ON, OPEN_SIDE_MENU, SWITCH_DARK, SWITCH_LIGHT } from "./types";

export const ThemeToggleLight = () => (dispatch) => {
  dispatch({
    type: SWITCH_LIGHT,
  });
};

export const ThemeToggleDark = () => (dispatch) => {
  dispatch({
    type: SWITCH_DARK,
  });
};


export const SildeMenuOpen = () => (dispatch) => {
  dispatch({
    type: OPEN_SIDE_MENU,
  });
};

export const SildeMenuClose = () => (dispatch) => {
  dispatch({
    type: CLOSE_SIDE_MENU,
  });
};


export const HeaderOn = () => (dispatch) => {
  dispatch({
    type: HEADER_ON,
  });
};

export const HeaderOff = () => (dispatch) => {
  dispatch({
    type: HEADER_OFF,
  });
};


