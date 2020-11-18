import * as types from './types';

export const addProductToCart = (idProduct) => ({
  type: types.ADD_CART,
  idProduct
});
export const startAddCart = (loading) => ({
  type: types.START_ADD_CART,
  loading
});
export const stopAddCart = (loading) => ({
  type: types.STOP_ADD_CART,
  loading
});
export const addCartSuccess = (data) => ({
  type: types.ADD_CART_SUCCESS,
  data
});
export const addCartFailure = (error) => ({
  type: types.ADD_CART_FAILURE,
  error
});
