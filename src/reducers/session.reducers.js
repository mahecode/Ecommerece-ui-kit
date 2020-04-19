import {
  SET_LIGHT_THEME,
  SET_DARK_THEME,
  TOGGLE_THEME,
  SET_LOGIN,
} from '../constants/constants';

const initialState = {
  login: false,
  backgroundColor: 'black',
  color: 'white',
  mode: 'light',
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        backgroundColor: 'white',
        color: '#223263',
      };
    case SET_DARK_THEME:
      return {
        ...state,
        backgroundColor: 'black',
        color: 'white',
      };
    case TOGGLE_THEME:
      return {
        ...state,
        mode: action.mode,
      };
    case SET_LOGIN:
      return {
        ...state,
        login: true,
      };
    default:
      return state;
  }
};

export default session;
