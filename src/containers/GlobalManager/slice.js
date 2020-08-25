import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  menu: { data: null, loading: false, error: false },
};

const globalAppManagerSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    loadMenu(state) {
      state.menu.loading = true;
      state.menu.error = false;
      state.menu.data = null;
    },
    loadMenuSuccess(state) {
      state.menu.loading = false;
    },
    loadMenuFailure(state) {
      state.menu.loading = false;
      state.menu.error = true;
    },
    setMenu(state, action) {
      state.menu.data = action.payload;
    },
  },
});

export const {
  loadMenu,
  loadMenuSuccess,
  loadMenuFailure,
  setMenu,
} = globalAppManagerSlice.actions;

export const { reducer, actions } = globalAppManagerSlice;
