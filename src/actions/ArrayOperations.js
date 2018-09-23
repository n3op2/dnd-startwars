const removeElement = (el) => ({
  type: 'REMOVE_ELEMENT',
  payload: {
    id: el.id
  }
});

const updateElement = (el, obj) => ({
  type: 'UPDATE_ELEMENT',
  payload: {
    id: el.id,
    obj: obj
  }
});

const addElement = (obj) => ({
  type: 'ADD_ELEMENT',
  payload: {
    obj: obj 
  }
});

export { 
  addElement,
  removeElement, 
  updateElement
}
  
