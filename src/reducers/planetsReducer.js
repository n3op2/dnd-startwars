import { reduxStore } from '../Store.js';

const planetsReducer = (state = reduxStore.planets) => {
  console.log(state);
  return state;
}

export { planetsReducer }
