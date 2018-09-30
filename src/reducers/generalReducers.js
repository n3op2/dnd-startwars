import { reduxStore } from '../initialState';

const gameStateReducer = (state = reduxStore.game, action) => {
  switch (action.type) {
    case 'UPDATE_BOOLEAN':
      return action.payload; 
    default:
      return state;
  }
}

export {
  gameStateReducer
}
