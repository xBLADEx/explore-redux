import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { createStore } from 'redux';
import { rootReducer } from './src/state/reducers';
import { Provider } from 'react-redux';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

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
      <Provider store={store}>
        <div>
          <Hello name={this.state.name} />
          <p>Start editing to see some magic happen :)</p>
        </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
