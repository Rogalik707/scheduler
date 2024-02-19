const defaultState = {
  tabs: [
    {
      tab: 'ПОДПИСКИ',
      index: 0
    }
  ],
  activeTab: null,
}

export const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TAB': {
      const newIndex = state.tabs.length;
      const newTab = {
        tab: action.payload,
        index: newIndex
      };
      return {
        ...state,
        tabs: [...state.tabs, newTab],
        activeTab: action.payload
      }
    }
    case 'REMOVE_TAB': {
      const tabIndexToRemove = state.tabs.findIndex(tab => tab.tab === action.payload);
      console.log('index', state.tabs)
      if (tabIndexToRemove > -1) {
        const updatedTabs = state.tabs.filter((tab, index) => index !== tabIndexToRemove);
        return {
          ...state,
          tabs: updatedTabs,
          activeTab: updatedTabs.length > 0 ? updatedTabs[updatedTabs.length - 1].tab : null,
        }
      }
      return state;
    }

    default:
      return state;
  }
}
