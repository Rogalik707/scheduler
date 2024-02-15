const defaultState = {
  list: [],
  activeWindowKey: null
}

export const pushToList = (text) => ({
  type: 'PUSH_TO_LIST',
  payload: text
});

export const listItemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_TO_LIST':
      return { ...state, list: [...state.list, action.payload], activeWindowKey: action.payload };
    case 'REMOVE_FROM_LIST':
      return { ...state, list: state.list.filter(item => item !== action.payload), activeWindowKey: action.payload };
    default:
      return state;
  }
}
