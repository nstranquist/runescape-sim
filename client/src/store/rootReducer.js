import { combineReducers } from 'redux'
import inventoryReducer from './inventory'
import skillsReducer from './skills'
import playerReducer from './player'
import messagesReducer from './messages'

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  skills: skillsReducer,
  player: playerReducer,
  messages: messagesReducer
})

export default rootReducer