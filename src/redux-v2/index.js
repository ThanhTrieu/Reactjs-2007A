import React from 'react';
import CoronaApp from './pages/corona';
import {Provider} from 'react-redux';
import store from './store/index';

const CoronaVirus = () => {
  return (
    <Provider store={store}>
      <CoronaApp/>
    </Provider>
  )
}
export default CoronaVirus;