const updateBoolean = (val) => ({
  type: 'UPDATE_BOOLEAN',
  payload: {
    game: val
  }
});

export {
  updateBoolean
}
