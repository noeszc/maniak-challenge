import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

import { loadMenu } from '../slice';
import {
  makeSelectMenuLoading,
  makeSelectMenuItemsByLabel,
} from '../selectors';

const manuGlobalSelector = createStructuredSelector({
  loading: makeSelectMenuLoading,
  value: makeSelectMenuItemsByLabel,
});

function useGlobalMenu() {
  const dispatch = useDispatch();
  const state = useSelector(manuGlobalSelector);

  useMount(() => dispatch(loadMenu()));

  return state;
}

export default useGlobalMenu;
