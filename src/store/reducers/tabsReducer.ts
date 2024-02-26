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
        isActive: true
      };
      return {
        ...state,
        tabs: [...state.tabs.map(tab => ({...tab, isActive: false})), newTab],
        activeTab: newIndex
      }
    }

    case 'REMOVE_TAB': {
      if (state.activeTab === action.payload.index) {
        state.activeTab = null;
      }
      const updatedTabs = state.tabs.filter((tab) => tab.index !== action.payload.index);
      let activeTab = state.activeTab;
      if (state.activeTab === action.payload.index) {
        activeTab = null;
      }
      return {
        ...state,
        tabs: updatedTabs,
        activeTab: activeTab
      }
    }


    case 'SET_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload.isActive,
        tabs: state.activeTab !== null ? [...state.tabs.map(tab => {
          if (tab.index === action.payload.isActive) {
            return {...tab, isActive: true}
          } else {
            return {...tab, isActive: false}
          }
        })] : state.tabs
      }
    }

    default:
      return state;
  }
}


