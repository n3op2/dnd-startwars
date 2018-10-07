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

const updateKeyVal = (obj) => ({
    type: 'UPDATE_KEY_VAL',
    payload: obj
});

export {
  updateKeyVal,
  removeKey,
  addKey
};
