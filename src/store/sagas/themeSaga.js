import { call, put } from "redux-saga/effects";
// import qs from "qs";
// import axios from "axios";
import * as Actions from "../actions/action-types/theme-actions";

const FORM_URL = document.querySelector("#mc-form").action;
const CAMPAIGN_ID = document.querySelector('input[name="CampaignId"]').value;
const CAMPAIGN_NAME = process.env.REACT_APP_PROJECT;

export function* submitForm(actions) {
  const formData = {
    ...actions.form,
    CampaignId: `${CAMPAIGN_ID}`,
  };

  // console.log('formData--', formData)

  try {
    // console.log("formData-", formData);
    // const getFormData = (object) =>
    //   Object.keys(object).reduce((formData, key) => {
    //     formData.append(key, object[key]);
    //     return formData;
    //   }, new FormData());

    // console.log('formData-',formData)

    // const response = fetch(`${FORM_URL}`, {
    //   method: "POST",
    //   body: Object.keys(formData).reduce((postData, key) => {
    //     postData.append(key, formData[key]);
    //     return postData;
    //   }, new FormData()),
    // });

    const response = yield call(() =>
      fetch(`${FORM_URL}`, {
        method: "POST",
        body: Object.keys(formData).reduce((postData, key) => {
          postData.append(key, formData[key]);
          return postData;
        }, new FormData()),
      })
    );

    // console.log("response-", response);

    if (response.statusText === "OK") {
      yield put({
        type: Actions.SUBMIT_FORM_SUCCESS,
      });
      // Tracking
      console.log("submitted:", CAMPAIGN_NAME);
    } else {
      yield put({ type: Actions.SUBMIT_FORM_FAIL });
    }
  } catch (e) {
    yield put({ type: Actions.SUBMIT_FORM_FAIL });
  }
}
