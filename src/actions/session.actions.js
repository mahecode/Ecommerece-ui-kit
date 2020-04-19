import {TOGGLE_THEME, SET_LOGIN} from '../constants/constants';
import {AsyncStorage} from 'react-native';

export const toggleTheme = () => async (dispatch) => {
  try {
    const mode = await AsyncStorage.getItem('theme');
    dispatch({
      type: TOGGLE_THEME,
      mode,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setLogin = () => (dispatch) => {
  try {
    dispatch({
      type: SET_LOGIN,
    });
  } catch (error) {
    console.log(error);
  }
};
