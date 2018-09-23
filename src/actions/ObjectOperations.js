const removeKey = (el) => ({
  type: 'REMOVE_KEY',
  payload: {
    el: el
  }
});

export {
  removeKey
};
