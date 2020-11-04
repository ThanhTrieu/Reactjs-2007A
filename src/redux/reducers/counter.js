import * as types from '../actions/type';

// tao ra state mac dinh 
const initialState = {
  count :0
}

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCEREMENT:
      return {...state, count: action.val + 1}
    case types.DECEREMENT:
      return {...state, count: action.val - 1}
    default:
      return state;
  }
}