import * as types from '../actions/types';

const initialState = {
  loading: null,
  error: null,
  info: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return { ...state, loading: action.loading }
    case types.LOGIN_CANCELLED:
      return { ...state, loading: action.loading}
    case types.LOGIN_SUCCESS:
      return { ...state, error: null, info: action.data}
    case types.LOGIN_FAILURE:
      return { ...state, error: action.error, info: null}
    default:
      return state;
  }
}

export default loginReducer;