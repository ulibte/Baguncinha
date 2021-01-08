import * as actionTypes from './actionTypes';
import { login } from '../api';

export const setKeyTest = (payload) => ({
  type: actionTypes.SET_KEY_TEST,
  payload,
});

export const setBrightSystem = (number) => ({
  type: actionTypes.SET_BRIGHT_SYSTEM,
  payload: number,
});

export function setBrightSliderBar(number) {
  return {
    type: actionTypes.SET_BRIGHT_SLIDER_BAR,
    payload: number,
  };
}

export function setDiceResult(number) {
  return {
    type: actionTypes.SET_DICE_RESULT,
    payload: number,
  };
}

export const setDiceMax = (payload) => ({
  type: actionTypes.SET_DICE_MAX,
  payload,
});

export const updateResultsSections = (payload) => ({
  type: actionTypes.UPDATE_RESULTS_SECTIONS,
  payload,
});

export const setDisableRollButton = (payload) => ({
  type: actionTypes.SET_DISABLE_ROLL_BUTTON,
  payload,
});

export const setWord = (payload) => ({
  type: actionTypes.SET_WORD,
  payload,
});

export const setMaxSize = (payload) => ({
  type: actionTypes.SET_MAX_SIZE,
  payload,
});

export const setMinSize = (payload) => ({
  type: actionTypes.SET_MIN_SIZE,
  payload,
});

export const setOptionMax = (payload) => ({
  type: actionTypes.SET_OPTION_MAX,
  payload,
});

export const setOptionMin = (payload) => ({
  type: actionTypes.SET_OPTION_MIN,
  payload,
});

export const logInSuccess = (token) => ({
  type: actionTypes.LOG_IN_SUCCESS,
  payload: token,
});

export const logInFailure = (errorMessage) => ({
  type: actionTypes.LOG_IN_FAILURE,
  payload: errorMessage,
});

export const loginDebug = () => ({
  type: actionTypes.LOG_IN_DEBUG,
  payload: 'debugToken',
});

export const logOff = () => ({
  type: actionTypes.LOG_OFF,
  payload: '',
});

// async action creator
export function logInUser(userName, password) {
  return async function logIn(dispatch) {
    dispatch({ type: actionTypes.LOG_IN_SENT });
    try {
      const token = await login(userName, password);
      dispatch(logInSuccess(token));
    } catch (error) {
      dispatch(logInFailure(error.message));
    }
  };
}
