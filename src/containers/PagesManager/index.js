import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { reducer } from './slice';
import saga from './saga';

function PagesManager() {
  useInjectReducer({ key: 'pages', reducer });
  useInjectSaga({ key: 'pages', saga });

  return null;
}

export default PagesManager;
