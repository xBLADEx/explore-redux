import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { createStore } from 'redux';

// Store - Global state

// Action - Describe our state. A function that returns an object.
const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

// Reducer - Takes current state and uses action to update new state. It modifies the store.
const counter = (state = 0, action: { type: string }) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

// Display It
store.subscribe(() => console.log(store.getState()));

// Dispatch - Executes the action to the reducer.
store.dispatch(increment());

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
