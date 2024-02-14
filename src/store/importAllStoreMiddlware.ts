import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import { topTabActions } from './topTabsSlice';
import { IMPORT_STORE_ACTION } from './rootActions';
import { AppActions, RootState } from './store';

export const importAllStoreMiddlware: Middleware<AppActions, RootState> = store => next => (action: PayloadAction<RootState>) => {
  if (action.type === IMPORT_STORE_ACTION) {
    store.dispatch(topTabActions.importSlice(action.payload.topTabReducer));
  }
  return next(action);
};
