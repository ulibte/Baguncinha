import {createStore} from 'redux'
import reducer from './reducer'

const DEFAULT_STATE = {logged: false}

const store = createStore(reducer, DEFAULT_STATE)

export default store