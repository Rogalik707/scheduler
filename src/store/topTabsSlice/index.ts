import { createSlice } from '@reduxjs/toolkit';
import {initialState} from "./initialState";
import {createTab} from "./actions/createTab";
import {importSlice} from "./actions/importSlice";

export const topTapsSlice = createSlice({
  name: 'topTaps-slice',
  initialState,
  reducers: {
    createTab,
    importSlice,
  },
});


export const topTabReducer = topTapsSlice.reducer; //после того как завели новый раздел стора - экспортируем вот так и импортируем в src\redux\store.js в combineReducers
export const topTabActions = topTapsSlice.actions; //Отсюда экспортируем получившиеся функции которые нужно дёргать для изменения стора

export type TopTabsActions = ReturnType<typeof topTapsSlice.actions[keyof typeof topTapsSlice.actions]>;
