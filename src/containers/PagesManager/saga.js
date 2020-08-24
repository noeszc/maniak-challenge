import _ from 'lodash';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { loadPage, loadPageSuccess, setPage, loadPageFailure } from './slice';
import { getPage } from 'utils/client';
import { makeSelectPage } from './selectors';

export function* watchLoadPage({ payload: page }) {
  try {
    // heads up
    const previousPage = yield select(makeSelectPage, { page });

    if (!_.isEmpty(previousPage)) {
      return yield all([
        put(loadPageSuccess()),
        put(setPage({ [page]: previousPage }, { isQueryCache: true })),
      ]);
    }

    const response = yield call(getPage, page);
    yield put(loadPageSuccess());
    yield put(setPage({ [page]: response }));
  } catch (error) {
    yield put(loadPageFailure(error));
  }
}

export default function* pagesSaga() {
  yield takeLatest(loadPage.type, watchLoadPage);
}
