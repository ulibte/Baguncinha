import { combineReducers } from 'redux';
import * as actionTypes from './actionTypes';

const keyTestReducer = (state = 1, { type, payload }) => {
  if (type === actionTypes.SET_KEY_TEST) return payload;
  return state;
};

const diceResultReducer = (state = 0, action) => {
  if (action.type === actionTypes.SET_DICE_RESULT) {
    return action.payload;
  }
  return state;
};

const diceMaxReducer = (state = 6, action) => {
  if (action.type === actionTypes.SET_DICE_MAX) {
    return action.payload;
  }
  return state;
};

const resultsSectionsReducer = (state = [{ title: '---', data: [] }], action) => {
  if (action.type === actionTypes.UPDATE_RESULTS_SECTIONS) {
    const { currentSections, max, result } = action.payload;
    if (currentSections[0].title === `d${max}`) {
      currentSections[0].data.unshift(result);
      return currentSections;
    }
    currentSections.unshift({ title: `d${max}`, data: [result] });
    return currentSections;
  }

  return state;
};

const disableRollButtonReducer = (state = false, action) => {
  if (action.type === actionTypes.SET_DISABLE_ROLL_BUTTON) {
    return action.payload;
  }

  return state;
};

const wordReducer = (state = '', { type, payload }) => {
  if (type === actionTypes.SET_WORD) return payload;
  return state;
};

const maxSizeReducer = (state = 5, { type, payload }) => {
  if (type === actionTypes.SET_MAX_SIZE) return payload;
  return state;
};

const minSizeReducer = (state = 2, { type, payload }) => {
  if (type === actionTypes.SET_MIN_SIZE) return payload;
  return state;
};

const optionMaxReducer = (state = 5, { type, payload }) => {
  if (type === actionTypes.SET_OPTION_MAX) return payload;
  return state;
};

const optionMinReducer = (state = 2, { type, payload }) => {
  if (type === actionTypes.SET_OPTION_MIN) return payload;
  return state;
};

const tokenReducer = (state = '', { type, payload }) => {
  if (type === actionTypes.LOG_IN_SUCCESS) {
    return payload;
  }
  if (type === actionTypes.LOG_IN_DEBUG) {
    return payload;
  }
  if (type === actionTypes.LOG_OFF) {
    return payload;
  }
  return state;
};

const logInFailureReducer = (state = '', { type, payload }) => {
  if (type === actionTypes.LOG_IN_FAILURE) return payload;
  return state;
};

const rootReducer = combineReducers({
  keyTest: keyTestReducer,
  token: tokenReducer,
  loginErr: logInFailureReducer,
  dice: combineReducers({
    diceResult: diceResultReducer,
    diceMax: diceMaxReducer,
    resultsSections: resultsSectionsReducer,
    disableRollButton: disableRollButtonReducer,
  }),
  randomWord: combineReducers({
    word: wordReducer,
    maxSize: maxSizeReducer,
    minSize: minSizeReducer,
    optionMax: optionMaxReducer,
    optionMin: optionMinReducer,
  }),
});

export default rootReducer;
