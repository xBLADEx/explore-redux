import { combineReducers } from 'redux';
import counter from './counter';

export const rootReducer = combineReducers({
  counter: counter, // whatever-name: reducer, or ES6 shorthand `counter`.
});
