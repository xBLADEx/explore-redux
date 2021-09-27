const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    // case 'INCREMENT': // Example using arguments in actions.
    //   return state + action.data;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

export default counter;
