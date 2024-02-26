const defaultState = {
  tabs: [],
  activeTab: null
}

export const tabsReducer = (state = defaultState, action) => {

  switch (action.type) {

    case 'ADD_TAB': {
      // const newIndex = state.tabs.length;
      const newTab = {
        tab: action.payload,
        // index: newIndex,
        isActive: true
      };
      return {
        ...state,
        tabs: [...state.tabs.map(tab => ({...tab, isActive: false})), newTab],
        // activeTab: newIndex
      }
    }

    case 'REMOVE_TAB': {
      const tabs = [...state.tabs];
      tabs.splice(action.payload.index, 1);
      console.log(action.payload.index)
      return {
        ...state,
        tabs
      }
    }


    case 'SET_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload.tabIndex,
        tabs: state.tabs.map((tab, index) => ({ ...tab, isActive: action.payload.tabIndex === index }))
      }
    }

    default:
      return state;
  }
}


