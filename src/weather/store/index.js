import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const configStore = () => {
  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(
      sagaMiddleware,
      logger
    )
  );
  sagaMiddleware.run(rootSaga);
  return { store: store }
}
export default configStore;