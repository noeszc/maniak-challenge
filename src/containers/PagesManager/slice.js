import _ from 'lodash';
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  loading: false,
  error: false,
  data: {},
};

const pagesManagerSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    loadPage(state) {
      state.loading = true;
      state.error = false;
    },
    loadPageSuccess(state) {
      state.loading = false;
    },
    loadPageFailure(state) {
      state.loading = false;
      state.error = true;
    },
    setPage: {
      reducer(state, action) {
        _.merge(state.data, action.payload);
      },
      prepare(payload = {}, meta = { isQueryCache: false }) {
        return { payload, meta };
      },
    },
  },
});

export const {
  loadPage,
  loadPageSuccess,
  loadPageFailure,
  setPage,
} = pagesManagerSlice.actions;

export const { reducer, actions } = pagesManagerSlice;
