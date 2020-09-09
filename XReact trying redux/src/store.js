import { reducer } from './reducer.js'; //import your reducer
// import state from './constants.js';

console.log(state);


export const getState = () => state;

const listeners = [];
export const subscribe = listener => {
  listeners.push(listener);
  console.log(listener);
  return listeners;
};

//dispatch function and calling
export const dispatch = action => {
  console.log('dsjhflkhadsk');
  
  state = reducer(action, state);
  listeners.forEach(listener => listener());
};

//calling dispatch to get state first time
dispatch({});
