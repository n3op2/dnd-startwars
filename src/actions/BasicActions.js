// This is somethingn I should review later.
const updateGameState = (val) => ({
  type: 'UPDATE_GAME_STATE',
  payload: {
    game: val
  }
});

const updatePanelState = (val) => ({
  type: 'UPDATE_PANEL_STATE',
  payload: {
    panel: val
  }
});

export {
  updateGameState,
  updatePanelState
}
