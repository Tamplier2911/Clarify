import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import {
  createSurveySuccess,
  createSurveyFailure,
  fetchUserSurveysStart,
  fetchUserSurveysSuccess,
  fetchUserSurveysFailure
} from "./survey-actions";

import surveyTypes from "./survey-types";

const { CREATE_SURVEY_START, FETCH_USER_SURVEYS_START } = surveyTypes;

export function* createSurvey({ payload }) {
  console.log(payload);

  try {
    const response = yield axios({
      method: "POST",
      url: "/api/v1/surveys/",
      data: payload
    });
    yield put(createSurveySuccess(response.data.data.data));
    yield put(fetchUserSurveysStart());
  } catch (error) {
    yield put(createSurveyFailure(error.message));
    yield alert(error.message);
  }
}

export function* fetchUserSurveys() {
  try {
    const response = yield axios({
      method: "GET",
      url: "/api/v1/surveys/"
    });
    yield put(fetchUserSurveysSuccess(response.data.message));
  } catch (error) {
    yield put(fetchUserSurveysFailure(error.message));
    yield alert(error.message);
  }
}

export function* onCreateSurveyStart() {
  yield takeLatest(CREATE_SURVEY_START, createSurvey);
}

export function* onFetchUserSurveysStart() {
  yield takeLatest(FETCH_USER_SURVEYS_START, fetchUserSurveys);
}

export function* surveySaga() {
  yield all([call(onCreateSurveyStart), call(onFetchUserSurveysStart)]);
}
