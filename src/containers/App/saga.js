import fp from 'lodash/fp';
import { v4 } from 'uuid';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getApp } from 'utils/client';
import { loadMenuSuccess, setMenu, loadMenu, loadMenuFailure } from './slice';

// //////////////////////////////////////////////////////////////////////

const getItems = fp.compose(
  fp.keyBy('id'),
  fp.map(({ route, ...rest }) => ({
    ...rest,
    route: process.env.PUBLIC_URL + '/' + route,
    id: v4(),
  })),
  fp.get('menu.items'),
);

// //////////////////////////////////////////////////////////////////////

export function* fetchAppMenu() {
  try {
    const response = yield call(getApp);
    yield put(loadMenuSuccess());
    yield put(setMenu(getItems(response)));
  } catch (error) {
    yield put(loadMenuFailure(error));
  }
}

export default function* appSaga() {
  yield takeLatest(loadMenu.type, fetchAppMenu);
}
