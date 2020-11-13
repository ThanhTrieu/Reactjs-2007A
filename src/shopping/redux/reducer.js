import { combineReducers } from 'redux';
import productReducer from '../pages/home/reducers/home-reducer';

const rootReducer = combineReducers({
  product: productReducer
});
export default rootReducer;