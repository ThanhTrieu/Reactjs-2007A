import { combineReducers } from 'redux';
import productReducer from '../pages/home/reducers/home-reducer';
import { cartReducer } from '../pages/cart/reducers/cart-reducer';


const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});
export default rootReducer;