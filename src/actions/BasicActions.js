// This is somethingn I should review later.
const reset = () => ({
  type: 'RESET'
});// << TEST

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
  reset
}
