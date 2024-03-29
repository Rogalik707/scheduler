const defaultState = {
  isModalOpen: false,
}
export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {...state, isModalOpen: true};
    case 'CLOSE_MODAL':
      return {...state, isModalOpen: false};
    default:
      return state;
  }
}
