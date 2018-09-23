const removeKey = (el) => ({
  type: 'REMOVE_KEY',
  payload: {
    el: el
  }
});

const addKey = () => ({
  type: 'ADD_KEY_TO_RND_EL',
  payload: true 
});

export {
  removeKey,
  addKey
};
