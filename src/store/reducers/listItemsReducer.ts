const defaultState = {
  list: [],
}

export const listItemsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_TO_LIST': {
      const name = action.payload

      return {list: [...state.list, name]};
    }
    case 'REMOVE_FROM_LIST': {
      const list = [...state.list];
      list.splice(action.payload.index, 1);
      return {...state, list};
    }

    default:
      return state;
  }
}
