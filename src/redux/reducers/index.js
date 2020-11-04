import { combineReducers } from 'redux';
import { counterReducer } from './counter';
// sau nay co them reducer thi import vao
const rootReducer = combineReducers({
  counter: counterReducer
});
export default rootReducer;
// sau nay se truyen luu vao store