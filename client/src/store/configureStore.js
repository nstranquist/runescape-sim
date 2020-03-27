import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(
      //applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  return store;
}