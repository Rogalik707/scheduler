const defaultState = {
  tabs: [],
  activeTab: null
}

export const tabsReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'ADD_TAB': {
      const newTab = {
        tab: action.payload,
        isActive: true
      };
      return {
        ...state,
        tabs: [...state.tabs.map(tab => ({...tab, isActive: false})), newTab],
      }
    }

    case 'REMOVE_TAB': {
      const tabs = [...state.tabs];
      tabs.splice(action.payload.index, 1);
      return {
        ...state,
        tabs
      }
    }


    case 'SET_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload.tabIndex,
        tabs: state.tabs.map((tab, index) => ({...tab, isActive: action.payload.tabIndex === index}))
      }
    }

    default:
      return state;
  }
}


