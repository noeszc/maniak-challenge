import { useMount } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { loadPage } from '../slice';
import { useLocation } from 'react-router-dom';
import {
  makeSelectPage,
  makeSelectPageLoading,
  makeSelectPageLoadingError,
} from '../selectors';
import { createStructuredSelector } from 'reselect';

const safePage = (page) => page.replace(/[/-]/g, '');

function useLoadPage() {
  const { pathname } = useLocation();
  const page = safePage(pathname);

  const dispatch = useDispatch();
  const state = useSelector(
    createStructuredSelector({
      value: (s) => makeSelectPage(s, { page }),
      loading: makeSelectPageLoading,
      error: makeSelectPageLoadingError,
    }),
  );

  useMount(() => dispatch(loadPage(page)));

  return state;
}

export default useLoadPage;
