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

export { 
  removeElement, 
  updateElement
}
  
