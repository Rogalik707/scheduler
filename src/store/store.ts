import {combineReducers, createStore} from "@reduxjs/toolkit";
import {tabsReducer} from "./reducers/tabsReducer";
import {modalReducer} from "./reducers/modalReducer";
import {hubsListReducer} from "./reducers/hubsListReducer";
import {subscribesListReducer} from "./reducers/subscribesListReducer";


export type RootReducer = {
  tabs: {
    tabs: [
      {
        tab: {
          key: string,
        },
        isActive: boolean
      }
    ],
    activeTab: {
      isActive: number,
    }
  },

  activeTab: null,

  isModalOpen: {
    isModalOpen: boolean,
  },

  hubs: {
    hubs: [],
  },
  subscribes: {
    subscribes: [],
  },
}

const rootReducer = combineReducers({
  tabs: tabsReducer,
  isModalOpen: modalReducer,
  hubs: hubsListReducer,
  subscribes: subscribesListReducer
})

export const store = createStore(rootReducer)
