import {combineReducers, createStore} from "@reduxjs/toolkit";
import {tabsReducer} from "./reducers/tabsReducer";
import {modalReducer} from "./reducers/modalReducer";
import {listItemsReducer} from "./reducers/listItemsReducer";


export type RootReducer = {
  tabs: {
    tabs: [
      {
        tab: {
          key: string,
        },
        isActive: boolean,
        index: number
      }
    ],
    activeTab: {
      key: string
    }
  },

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
