import { reduxStore } from '../initialState';

// To I really need them? Maybe I should consider using React State instead?
const updateLukeReducer = (state = reduxStore.lukeFound, action) => {
  switch (action.type) {
    case 'UPDATE_LUKE_FOUND':
      return action.payload;
    default:
      return state;
  }
}
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
      return action.payload;
    default:
      return state; 
  }
}

export {
  gameStateReducer,
  panelStateReducer,
  updateLukeReducer
}
