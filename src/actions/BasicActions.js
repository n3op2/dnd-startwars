// This is somethingn I should review later.

// Find a more suitable name or merge?
const updateLukeFound = (val) => ({
  type: 'UPDATE_LUKE_FOUND',
  payload: val
});

const reset = () => ({
  type: 'RESET'
});

const updateGameState = (val) => ({
  type: 'UPDATE_GAME_STATE',
  payload: val
});

const updatePanelState = (val) => ({
  type: 'UPDATE_PANEL_STATE',
  payload: {
    panel: val
  }
});

export {
  updateGameState,
  updatePanelState,
  updateLukeFound,
  reset
}
