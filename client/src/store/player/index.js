// src/store/player/index.js

// action types
const ADD_GOLD = 'ADD_GOLD'
const REMOVE_GOLD = 'REMOVE_GOLD'

const CHANGE_NAME = 'CHANGE_NAME'


// action creators
export const addGold = (goldNumber) => ({
  type: ADD_GOLD,
  goldNumber
})
export const removeGold = (goldNumber) => ({
  type: REMOVE_GOLD,
  goldNumber
})

export const changeName = (newName) => ({
  type: CHANGE_NAME,
  name: newName
})


// action reducer
const initialState = {
  name: "darthbitcoin",
  gold: 0,
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_GOLD:
      return {
        ...state,
        gold: state.gold + action.goldNumber
      }
    case REMOVE_GOLD:
      return {
        ...state,
        gold: state.gold - action.goldNumber
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.name
      }
    default:
      return state;
  }
}