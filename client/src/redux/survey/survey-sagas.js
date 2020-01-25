import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import { createSurveySuccess, createSurveyFailure } from "./survey-actions";

import surveyTypes from "./survey-types";

const { CREATE_SURVEY_START } = surveyTypes;

export function* createSurvey({ payload }) {
  console.log(payload);
  try {
    const response = yield axios({
      method: "POST",
      url: "/api/v1/surveys/",
      data: payload
    });
    yield put(createSurveySuccess(response.data.data.data));
  } catch (error) {
    yield put(createSurveyFailure(error.message));
    yield alert(error.message);
  }
}

export function* onCreateSurveyStart() {
  yield takeLatest(CREATE_SURVEY_START, createSurvey);
}

export function* surveySaga() {
  yield all([call(onCreateSurveyStart)]);
}

/*

try {
      const res = await axios({
        method: "POST",
        url: "/api/v1/surveys/",
        data: {
          name: campaignName,
          description: campaignDescription,
          body: campaignBody,
          participants: campaignParticipants
        }
      });
      console.log(res);
      setCampaignInfo({
        campaignName: "",
        campaignDescription: "",
        campaignBody: "",
        campaignParticipants: ""
      });
    } catch (error) {
      alert(error.message);
    }

*/
