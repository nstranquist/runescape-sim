// src/store/messages/index.js


// action types
const ADD_MESSAGE = 'ADD_MESSAGE'
const REMOVE_MESSAGE = 'REMOVE_MESSAGE'


// action creators
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  message
})
export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  id
})


// reducer
const initialState = {
  messages: []
}

export default (
  state=initialState,
  action
) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      }
    case REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter(message => message.id === action.id)
      }
    default:
      return state;
  }
}