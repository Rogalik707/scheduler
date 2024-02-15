
const defaultState = {
  tabs: 0,
}

export const tabsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TABS':
      return { ...state, tabs: state.tabs + action.payload }
    case 'REMOVE_TABS':
      return { ...state, tabs: state.tabs - action.payload }
    default:
      return state
  }
}
