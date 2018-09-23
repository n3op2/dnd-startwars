import { reduxStore } from '../Store.js';

const interceptorsReducer = (state = reduxStore.interceptors, action) => {
  const newArr = [...state]
  switch (action.type) {
    case 'REMOVE_ELEMENT':
      const index = newArr.findIndex(item => 
        item.id === action.payload.id
      );
      newArr.splice(index, 1);
      return newArr; 
    case 'ADD_ELEMENT':
      return [...newArr, action.payload.obj];
    default:
      return state;
  }
}

export { interceptorsReducer };
