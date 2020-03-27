// src/store/inventory/index.js
import { v4 as uuidv4 } from 'uuid'

// action types
const ADD_ITEM = 'ADD_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY'
const DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY'

const INCREASE_SIZE = 'INCREASE_SIZE'

// action creators
export const addInventoryItem = (item) => ({
  type: ADD_ITEM,
  item
})
export const removeInventoryItem = (itemName) => ({
  type: REMOVE_ITEM,
  itemName
})
export const incrementInventoryItem = (itemName) => ({
  type: INCREMENT_ITEM_QUANTITY,
  itemName
})
export const decrementInventoryItem = (itemName) => ({
  type: DECREMENT_ITEM_QUANTITY,
  itemName
})


export const increaseInventorySize = () => ({
  type: INCREASE_SIZE
})


// reducer
const initialState = {
  size: 24,
  items: [
    {
      id: uuidv4(),
      name: 'Tuna',
      sellValue: 12,
      stackable: true,
      quantity: 12,
    },
    {
      id: uuidv4(),
      name: 'Bronze Sword',
      // sellValue: 40,
      stackable: false,
      quantity: 1,
      // no quantity provided if stackable=false
    }
  ]
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.item
        ]
      }
    case INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items.map(item => {
          if(item.name === action.itemName) {
            item.quantity++; // can change to add multiple quantities at once
          }
          return item;
        })
      }
    case DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        items: state.items
          .map(item => {
            if(item.name === action.itemName) {
              item.quantity--; // can change to remove multiple quantities at once
            }
            return item;
          })
          .filter(item => item.quantity > 0)
      }
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.name !== action.itemName) // again, can change to use id instead
      }
    case INCREASE_SIZE: 
      return {
        ...state,
        size: state.size + 1
      }
    default:
      return state;
  }
}
