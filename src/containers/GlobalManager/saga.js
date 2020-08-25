import _ from 'lodash/fp';
import { takeLatest, call, put } from 'redux-saga/effects';
import { v4 } from 'uuid';
import { loadMenu, loadMenuSuccess, loadMenuFailure, setMenu } from './slice';
import { getApp } from 'utils/client';

// //////////////////////////////////////////////////////////////////////

const getItems = _.compose(
  _.keyBy('id'),
  _.map(({ route, ...rest }) => ({
    ...rest,
    route: process.env.PUBLIC_URL + '/' + route,
    id: v4(),
  })),
  _.get('menu.items'),
);

// //////////////////////////////////////////////////////////////////////

export function* fetchGlobalMenu() {
  try {
    const response = yield call(getApp);
    yield put(loadMenuSuccess());
    yield put(setMenu(getItems(response)));
  } catch (error) {
    yield put(loadMenuFailure(error));
  }
}

// //////////////////////////////////////////////////////////////////////

export default function* globalAppSaga(params) {
  yield takeLatest(loadMenu.type, fetchGlobalMenu);
}
