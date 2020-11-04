import * as types from '../actions/type';
import { data } from '../services/index';

const initialState = {
  virus: []
}

export const coronaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA_CORONA: 
      return {...state, virus: data}
    default:
      return state;
  }
}