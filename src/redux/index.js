import React from 'react';
import ButtonComponent from './components/button';
import Result from './components/result';
import { Provider } from 'react-redux';
import store from './store/index';

const AppRedux = () => {
  return (
    <Provider store={store}>
      <Result/>
      <ButtonComponent name="increment"> + </ButtonComponent>
      <ButtonComponent name="decrement"> - </ButtonComponent>
    </Provider>
  )
}
export default React.memo(AppRedux);