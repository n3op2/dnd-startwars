import { reduxStore } from '../Store.js';

//move to something like utils.js?
const filterById = (arr, id) => arr.filter(item => item.id === id);

const planetsReducer = (state = reduxStore.planets, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ELEMENT':
      const planet = filterById(state, payload.id);;
      const index = [...state].findIndex(item => item === planet[0]);
      const newState = [...state];
      newState[index].interceptor = payload.obj;
      return newState; 
    default:
      return state;
  }
}

export { planetsReducer };
