import React from 'react';
import { Provider } from 'react-redux';
import configStore from './store/index';
import AppWeather from './pages/weather';

const { store } = configStore();

const AppIndex = () => {
  return (
    <Provider store={store}>
      <AppWeather />
    </Provider>
  )
}
export default AppIndex;