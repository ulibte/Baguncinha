import * as actionTypes from "./actionTypes";

export const setKeyTest = (payload) => ({
    type: actionTypes.SET_KEY_TEST,
    payload
})


export const userIsLogged = isLogged => ({
    type: actionTypes.USER_IS_LOGGED,
    payload: isLogged,
})

export const setBrightSystem = number => ({
    type: actionTypes.SET_BRIGHT_SYSTEM,
    payload: number,
})

export function setBrightSliderBar(number) {
    return ({
        type: actionTypes.SET_BRIGHT_SLIDER_BAR,
        payload: number,
    })
}

export function setDiceResult(number) {
    return({
        type: actionTypes.SET_DICE_RESULT,
        payload: number
    })
}

export const setDiceMax = (payload) => ({
    type: actionTypes.SET_DICE_MAX,
    payload
})

export const updateResultsSections = (payload) => ({
    type: actionTypes.UPDATE_RESULTS_SECTIONS,
    payload
})

export const setDisableRollButton = (payload) => ({
    type: actionTypes.SET_DISABLE_ROLL_BUTTON,
    payload
})

export const setWord = (payload) => ({
    type: actionTypes.SET_WORD,
    payload
})

export const setMaxSize = (payload) => ({
    type: actionTypes.SET_MAX_SIZE,
    payload
})

export const setMinSize = (payload) => ({
    type: actionTypes.SET_MIN_SIZE,
    payload
})

export const setOptionMax = (payload) => ({
    type: actionTypes.SET_OPTION_MAX,
    payload
})

export const setOptionMin = (payload) => ({
    type: actionTypes.SET_OPTION_MIN,
    payload
})









