import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as api from '../services/index';
import { GET_DATA_CORONA } from '../actions/type';

function* getDataVirusSaga() {
  try {
    // dispatch action loading - bat dau call data tu api ve
    yield put(actions.startGetDataVirus(true));
    const data = yield call(api.getDataVirusCorona);
    if(data){
      yield put(actions.getDataCoronaSuccess(data));
    } else {
      yield put(actions.getDataCoronaFail({
        code: 500,
        message: 'not found data'
      }));
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetDataVirusSaga() {
  // theo doi action 
  yield takeEvery(GET_DATA_CORONA, getDataVirusSaga);
}