import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import history from 'utils/history';
import theme from 'utils/theme';

// Import root app
import App from 'containers/App';

import configureStore from './configureStore';

const robotoFontObserver = new FontFaceObserver('Roboto', {});

// When Roboto is loaded, add a font-family using Roboto to the body
robotoFontObserver.load().then(() => {
  document.body.classList.add('font--loaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <React.StrictMode>
          <Component></Component>
          <CSSReset></CSSReset>
        </React.StrictMode>
      </ThemeProvider>
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
