import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import ReduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'


/* const thunkMiddleware = store => next => action => {
  if(typeof action === 'function')
    action(store.dispatch)
  else
    next(action)
}*/

const persistConfig = { //just persist on level deep
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['token', ] // ['token', someOther]
}

/* const someOther = {
  key: 'someOther',
  storage: AsyncStorage,
  blacklist: ['someKeyIDontWant']
}*/

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk)) // applyMiddleware(m1, m2,m2, ...)

export const persistor = persistStore(store)


