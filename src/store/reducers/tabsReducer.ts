import {useState} from "react";

const defaultState = {
  tabs: [],
  activeTab: null
}

export const tabsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'ADD_TAB': {
      const newIndex = state.tabs.length;
      const newTab = {
        tab: action.payload,
        index: newIndex,
      };
      return {
        ...state,
        tabs: [...state.tabs, newTab],
        // activeTab: action.payload
      }
    }
    case 'REMOVE_TAB': {
      const updatedTabs = state.tabs.filter((tab) => tab.index !== action.payload.index);
      return {
        ...state,
        tabs: updatedTabs,
        // activeTab: updatedTabs.length > 0 ? updatedTabs[updatedTabs.length - 1].tab : null,
      }
    }

    case 'SET_ACTIVE_TAB': {
      const activeTab = state.tabs.find((tab) => tab.index === action.payload.index);
      console.log(activeTab)
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          return {
            ...tab,
            index: tab.index,
            isActive: action.payload.isActive
          }
        })
      }
    }

    default:
      return state;
  }
}
