import { combineReducers } from 'redux'
import inventoryReducer from './inventory'
import skillsReducer from './skills'
import playerReducer from './player'

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  skills: skillsReducer,
  player: playerReducer,
})

export default rootReducer