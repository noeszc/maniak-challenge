import React from 'react';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer } from './slice';
import saga from './saga';
import useMenu from './components/useMenu';

function GlobalAppManager({ children }) {
  useInjectReducer({ key: 'app', reducer });
  useInjectSaga({ key: 'app', saga });

  const state = useMenu();

  const renderedChildren = children(state);
  return renderedChildren && React.Children.only(renderedChildren);
}

export default GlobalAppManager;
