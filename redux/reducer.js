import {combineReducers} from 'redux'
import {USER_IS_LOGGED} from './actions'

const loggedReducer = (state = false, action) => {
    if(action.type === USER_IS_LOGGED){
        state = action.payload
        return state
    }
    return state
}

const reducer = combineReducers({
    logged: loggedReducer,
})

export default reducer