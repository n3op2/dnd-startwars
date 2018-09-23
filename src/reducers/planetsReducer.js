import { reduxStore } from '../Store.js';

//move to something like utils.js?
const filterById = (arr, id) => arr.filter(item => item.id === id);

export const planetsReducer = (state = reduxStore.planets, { type, payload }) => {
  const newState = [...state];
  switch (type) {
    case 'UPDATE_ELEMENT':
      const currentEl = newState[newState.findIndex(item => 
        item === filterById(newState, payload.id)[0])];
      currentEl.interceptor = payload.obj;
      currentEl.lucas ? delete currentEl.lucas : null; 
      return newState;
    case 'REMOVE_KEY':
      const i = newState.findIndex(item =>
        item === filterById(newState, payload.el.id)[0]);
      delete newState[i].interceptor;
      return newState;
    case 'ADD_KEY_TO_RND_EL':
      newState[Math.floor(Math.random() * newState.length)].lucas = payload;
      return newState;
    default:
      return state;
  }
}
