import { reduxStore } from '../initialState';

// To I really need them? Maybe I should consider using React State instead?
const gameStateReducer = (state = reduxStore.game, action) => {
  switch (action.type) {
    case 'UPDATE_GAME_STATE':
      return action.payload; 
    default:
      return state;
  }
}

const panelStateReducer = (state = reduxStore.panel, action) => {
  switch (action.type) {
    case 'UPDATE_PANEL_STATE':
      console.log(action);
      return action.payload;
    default:
      return state; 
  }
}

export {
  gameStateReducer,
  panelStateReducer
}
