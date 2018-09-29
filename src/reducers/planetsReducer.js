import { reduxStore } from '../initialState.js';

//move to something like utils.js?
const filterById = (arr, id) => arr.filter(item => item.id === id);

export const planetsReducer = (state = reduxStore.planets, { type, payload }) => {
  const newState = [...state];
  switch (type) {
    case 'UPDATE_ELEMENT':
      return state.map(p => {
        if (p.lucas) {
          const {lucas, ...rest} = p
          return {
            ...rest,
            interceptor: payload.obj,
          }
        }
        return p
      })
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
