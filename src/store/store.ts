import {combineReducers, configureStore, Dispatch} from '@reduxjs/toolkit'
import {topTabReducer, TopTabsActions} from './topTabsSlice/index';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {IMPORT_STORE_ACTION} from './rootActions';
import {importAllStoreMiddlware} from './importAllStoreMiddlware';


const rootReducer = combineReducers({
  topTabReducer,
})





const store = configureStore({
  reducer: rootReducer,
  middleware: [importAllStoreMiddlware],
})

export type AppActions = TopTabsActions | {
  payload: RootState;
  type: typeof IMPORT_STORE_ACTION;
}

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = Dispatch<AppActions>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
