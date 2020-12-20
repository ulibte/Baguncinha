import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const keyTestReducer = (state = 1, {type, payload}) => {
	if(type === actionTypes.SET_KEY_TEST)
		return payload
	return state
}

const loggedReducer = (state = false, action) => {
	if (action.type === actionTypes.USER_IS_LOGGED) {
		state = action.payload
		return state
	}
	return state
}

function brightSystemReducer(state = 0, action) {
	if (action.type === actionTypes.SET_BRIGHT_SYSTEM) {
		return action.payload
	}
	return state
}

const brightSliderBarReducer = (state = null, action) => {
	if (action.type === actionTypes.SET_BRIGHT_SLIDER_BAR) {
		return action.payload
	}
	return state
}

const diceResultReducer = (state = 0, action) => {
	if (action.type === actionTypes.SET_DICE_RESULT) {
		return action.payload
	}
	return state
}

const diceMaxReducer = (state = 6, action) => {
	if (action.type === actionTypes.SET_DICE_MAX) {
		return action.payload
	}
	return state
}

const resultsSectionsReducer = (state = [{ title: '---', data: [] },], action) => {
	if (action.type === actionTypes.UPDATE_RESULTS_SECTIONS) {
		let {currentSections, max, result} = action.payload
		if(currentSections[0].title === `d${max}`){
			currentSections[0].data.unshift(result)
			return currentSections
		} else {
			currentSections.unshift({title: `d${max}`, data: [result]})
			return currentSections
		}
	}

	return state
}

const disableRollButtonReducer = (state = false, action) => {
	if (action.type === actionTypes.SET_DISABLE_ROLL_BUTTON) {
		return action.payload
	}

	return state
}

const wordReducer = (state = '', {type, payload}) => {
	if(type === actionTypes.SET_WORD)
		return payload
	return state
}

const maxSizeReducer = (state = 5, {type, payload}) => {
	if(type === actionTypes.SET_MAX_SIZE)
		return payload
	return state
}

const minSizeReducer = (state = 2, {type, payload}) => {
	if(type === actionTypes.SET_MIN_SIZE)
		return payload
	return state
}

const optionMaxReducer = (state = 5, {type, payload}) => {
	if(type === actionTypes.SET_OPTION_MAX)
		return payload
	return state
}

const optionMinReducer = (state = 2, {type, payload}) => {
	if(type === actionTypes.SET_OPTION_MIN)
		return payload
	return state
}

const reducer = combineReducers({
	keyTest: keyTestReducer,
	logged: loggedReducer,
	bright: combineReducers({
		system: brightSystemReducer,
		sliderBar: brightSliderBarReducer,
	}),
	dice: combineReducers({
		diceResult: diceResultReducer,
		diceMax: diceMaxReducer,
		resultsSections: resultsSectionsReducer,
		disableRollButton: disableRollButtonReducer
	}),
	randomWord: combineReducers({
		word: wordReducer,
		maxSize: maxSizeReducer,
		minSize: minSizeReducer,
		optionMax: optionMaxReducer,
		optionMin: optionMinReducer,
	}),
})

export default reducer