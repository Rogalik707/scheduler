const defaultState = {
  subscribes: [],
}

export const subscribesListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_TO_SUBSCRIBES_LIST': {

      return {subscribes: [...state.subscribes, action.payload]};
    }
    case 'REMOVE_FROM_SUBSCRIBES_LIST': {
      const subscribes = [...state.subscribes];
      subscribes.splice(action.payload.index, 1);
      return {...state, subscribes};
    }

    default:
      return state;
  }
}
