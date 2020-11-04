import * as types from './type';

// dinh hanh dong
export const incrementCounter = (val) => ({
  type: types.INCEREMENT,
  val
});
export const decrementCounter = (val) => ({
  type: types.DECEREMENT,
  val
})