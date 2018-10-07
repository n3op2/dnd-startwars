import { reduxPlanets } from '../initialState.js';

export const planetsReducer = (state = reduxPlanets(), { type, payload }) => {
  const newState = [...state];
  switch (type) {
    case 'RESET':
      return reduxPlanets();
    case 'UPDATE_ELEMENT':
      return state.map(el => {
        if (el.id === payload.id) {
          const {...obj} = el;
          if(el.lucas) {
            obj.lucas = false 
            return {...obj, interceptor: payload.obj};
          }
          return { ...obj, interceptor: payload.obj }
        }
        return el;
      })
    case 'REMOVE_KEY':
      return state.map(el => {
        if(el.id === payload.el.id) {
          const {interceptor, ...noInterceptor} = el;
          return noInterceptor;
        }
        return el;
      });
    case 'ADD_KEY_TO_RND_EL':
      //To find a better way of achieving this.
      newState[Math.floor(Math.random() * newState.length)].lucas = payload;
      return newState;
    case 'UPDATE_KEY_VAL':
      // Something to review later state.filter(....)[0].
      const currentPlanet = state.filter(el => el.id === payload.id)[0];
      currentPlanet.total--;
      return state.map(el => {
        if(currentPlanet.id === el.id) {
          return currentPlanet;
        }
        return el;
      });
    default:
      return state;
  }
}
