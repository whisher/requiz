import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import styles from './styles/main.css';

const store = configureStore();

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


