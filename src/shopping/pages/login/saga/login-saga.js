import {call, put, takeLatest} from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as types from '../actions/types';
import { loginApi } from '../../../services/login';

function* loginSaga({user, pass}) {
  try {
    yield put(actions.loginStart(true));
    const response = yield call(loginApi, user, pass);
    if(response){
      yield put(actions.loginSuccess(response));
    } else {
      yield put(actions.loginFailure({
        code: 505,
        message: 'can not login'
      }));
    }
  } catch (e) {
    yield put(actions.loginFailure(e));
  }
}