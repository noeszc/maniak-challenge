import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from 'containers/App';
import history from 'utils/history';
import configureStore from './configureStore';

console.log(history);

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');
console.log(store.getState());

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <React.StrictMode>
        <Component></Component>
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>
);

const render = (Component) => {
  ReactDom.render(
    <ConnectedApp Component={Component}></ConnectedApp>,
    MOUNT_NODE,
  );
};

render(App);
