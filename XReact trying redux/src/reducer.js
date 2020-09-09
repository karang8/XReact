const initalState = {
  counter: 0,
};
function reducer(action, state = initalState) {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
export { reducer };
