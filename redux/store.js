import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import ReduxThunk from 'redux-thunk'

/* const thunkMiddleware = store => next => action => {
  if(typeof action === 'function')
    action(store.dispatch)
  else
    next(action)
}
 */
const store = createStore(reducer, applyMiddleware(ReduxThunk)) // applyMiddleware(m1, m2,m2, ...)


export default store