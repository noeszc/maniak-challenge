import _ from 'lodash';
import { createSelector } from 'reselect';
import { initialState } from './slice';

/**
 * Direct selector to the Pages state domain
 */
const selectPagesDomain = (state) => state.pages || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Pages
 */

const makeSelectPages = createSelector(
  selectPagesDomain,
  (substate) => substate,
);

export const makeSelectPageData = createSelector(
  makeSelectPages,
  (substate) => substate.data,
);

export const makeSelectPageLoading = createSelector(
  makeSelectPages,
  (substate) => substate.loading,
);

export const makeSelectPageLoadingError = createSelector(
  makeSelectPages,
  (substate) => substate.error,
);

export const makeSelectPage = createSelector(
  makeSelectPageData,
  (_, { page }) => page,
  (pages, page) => _.get(pages, page, {}),
);

export default makeSelectPages;
