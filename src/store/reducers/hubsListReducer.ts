const defaultState = {
  hubs: [],
}

export const hubsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_TO_HUBS_LIST': {

      return {hubs: [...state.hubs, action.payload]};
    }
    case 'REMOVE_FROM_HUBS_LIST': {
      const hubs = [...state.hubs];
      hubs.splice(action.payload.index, 1);
      return {...state, hubs};
    }

    default:
      return state;
  }
}
