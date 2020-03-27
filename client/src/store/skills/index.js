// src/store/skills/index.js

// action types
const ADD_FISHING_XP = 'ADD_FISHING_XP'
const ADD_WOODCUTTING_XP = 'ADD_WOODCUTTING_XP'
const ADD_MINING_XP = 'ADD_MINING_XP'


// action creators
export const addXp = (xp, skillType) => {
  switch(skillType) {
    case 'fishing':
      return ({
        type: ADD_FISHING_XP,
        xp
      })
    case 'woodcutting':
      return ({
        type: ADD_WOODCUTTING_XP,
        xp
      })
    case 'mining':
      return ({
        type: ADD_MINING_XP,
        xp
      })
    default:
      console.log('invalid skill to increment xp on.')
      break;
  }
}


// reducer
const initialState = {
  fishingXp: 0,
  woodcuttingXp: 0,
  miningXp: 0
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_FISHING_XP:
      return {
        ...state,
        fishingXp: action.fishingXp
      }
    case ADD_WOODCUTTING_XP:
      return {
        ...state,
        woodcuttingXp: action.woodcuttingXp
      }
    case ADD_MINING_XP:
      return {
        ...state,
        miningXp: action.miningXp
      }
    default:
      return state
  }
}
