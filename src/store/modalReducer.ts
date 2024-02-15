const defaultState = {
  isModalOpen: true,
  activeWindowKey: null,
}


export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, activeWindowKey: action.payload};
    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false, activeWindowKey: null };
    default:
      return state;
  }
}
