import {combineReducers, createStore} from "@reduxjs/toolkit";
import {tabsReducer} from "./tabsReducer";
import {modalReducer} from "./modalReducer";
import {listItemsReducer} from "./listItemsReducer";


export type RootReducer = {
  tabs: number,

  isModalOpen: {
    isModalOpen: boolean,
    activeWindowKey: null
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
