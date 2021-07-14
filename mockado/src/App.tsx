import React from 'react';
import { Provider } from 'react-redux';
import Lista from './components/Tasks';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore({ type: String })}>
      <Lista />
    </Provider>

  );
}

export default App;
