import {combineReducers, createStore} from "@reduxjs/toolkit";
import {tabsReducer} from "./reducers/tabsReducer";
import {modalReducer} from "./reducers/modalReducer";
import {listItemsReducer} from "./reducers/listItemsReducer";


export type RootReducer = {
  tabs: [
    {
      tab: '',
      index: number
    }
  ],
  activeTab: null,

  isModalOpen: {
    isModalOpen: boolean,
    activeWindowKey: {
      key: string
    }
  },

  list: {
    list: [],
    activeWindowKey: null
  }
}

const rootReducer = combineReducers({
  tabs: tabsReducer,
  isModalOpen: modalReducer,
  list: listItemsReducer
})

export const store = createStore(rootReducer)
