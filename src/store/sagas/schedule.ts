import axios from 'axios'
import { put, call } from 'redux-saga/effects'

import {
  ISchedule,
  GetScheduleRequest
} from './../types/schedule';

import {
  getScheduleAsynsFailure,
  getScheduleAsynsSuccess
} from '../actions/schedule';

import {
  hideLoader,
  showLoader
} from '../actions/loader';

export function* getSchedule({payload}:GetScheduleRequest) {
  try {
    yield put(showLoader());
    const { data } = yield call(() => axios.get<ISchedule[]>(`https://my-json-server.typicode.com/iamkoks/shedule_db/${payload}`));

    yield put(getScheduleAsynsSuccess({schedule: data}));
    yield put(hideLoader());
  }
  catch(error) {
    yield put(hideLoader());
    yield put(getScheduleAsynsFailure(error))
  }
}
