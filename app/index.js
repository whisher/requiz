import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import qAndAReducers from './reducers';
import App from './containers/App';

let store = createStore(qAndAReducers);
let unsubscribe = store.subscribe(() =>
  console.log('store.getState',store.getState())
);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);


