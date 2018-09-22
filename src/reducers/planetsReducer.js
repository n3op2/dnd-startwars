import { reduxStore } from '../Store.js';

const planetsReducer = (state = reduxStore.planets, { type, payload }) => {
  switch (type) {
    case 'UPDATE_ELEMENT':
      const getPlanet = [...state].filter(item => item.id === payload.id);
      const index = [...state].findIndex(item => item === getPlanet[0]);
      const newState = [...state];
      newState[index].interceptor = payload.obj;
      return newState; 
    default:
      return state;
  }
}

export { planetsReducer };
