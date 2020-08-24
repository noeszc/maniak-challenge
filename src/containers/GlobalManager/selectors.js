import _ from 'lodash';
import { createSelector } from 'reselect';
import { initialState } from './slice';

/**
 * Direct selector to the App state domain
 */
const selectAppDomain = (state) => state.app || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by App
 */

const makeSelectApp = createSelector(selectAppDomain, (substate) => substate);

export const makeSelectMenu = createSelector(
  makeSelectApp,
  (substate) => substate.menu,
);

export const makeSelectMenuData = createSelector(
  makeSelectMenu,
  (substate) => substate.data,
);
export const makeSelectMenuLoading = createSelector(
  makeSelectMenu,
  (substate) => substate.loading,
);

export const makeSelectMenuItemsByLabel = createSelector(
  makeSelectMenu,
  (substate) => _.keyBy(substate.data, 'text'),
);

export default makeSelectApp;
