const defaultState = {
  hubs: [],
}

export const hubsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_TO_HUBS_LIST': {
      const newHub = {
        hub: action.payload.hubName,
        uniqueId: action.payload.uniqueId,
        subscribes: action.payload.subscribes
      }
      return {
        hubs: [...state.hubs.map(hub => ({...hub})), newHub],
      }
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
