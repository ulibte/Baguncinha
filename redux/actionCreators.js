import * as actionTypes from "./actionTypes";

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

export const disableRollButton = (payload) => ({
    type: actionTypes.DISABLE_ROLL_BUTTON,
    payload
})







