import { call, put } from "redux-saga/effects";
import qs from "qs";
import axios from "axios";
import * as Actions from "../actions/action-types/theme-actions";

const FORM_URL = document.querySelector("#mc-form").action;
const CAMPAIGN_ID = document.querySelector('input[name="CampaignId"]').value;

export function* submitForm(actions) {
  // console.log('actions.form--', actions.form)
  const formData = {
    ...actions.form,
    CampaignId: `${CAMPAIGN_ID}`,
    DonationPageUrl: "https://www.greenpeace.org/eastasia/",
    LeadSource: "Petition - Plastics",
    OptIn: true,
    Petition_Interested_In_Arctic__c: "false",
    Petition_Interested_In_Climate__c: "false",
    Petition_Interested_In_Forest__c: "false",
    Petition_Interested_In_Health__c: "false",
    Petition_Interested_In_Oceans__c: "false",
    Petition_Interested_In_Plastics__c: "true",
    UtmCampaign: "",
    UtmContent: "",
    UtmMedium: "",
    UtmSource: "",
    UtmTerm: "",
    numResponses: "78901",
    numSignupTarget: "123456",
    req: "post_data",
  };

  // console.log('formData--', formData)

  try {
    console.log("formData-", formData);
    const getFormData = (object) =>
      Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key]);
        return formData;
      }, new FormData());
    fetch(`${FORM_URL}`, {
      method: "POST",
      body: Object.keys(formData).reduce((postData, key) => {
        postData.append(key, formData[key]);
        return postData;
      }, new FormData()),
    });
    // yield delay(800)
    // yield put({ type: Actions.SUBMIT_FORM_SUCCESS});
    const response = yield call(() =>
      axios.post(`${FORM_URL}`, qs.stringify(formData))
    );

    console.log("response-", response);

    if (response.statusText === "OK") {
      yield put({
        type: Actions.SUBMIT_FORM_SUCCESS,
      });
    } else {
      yield put({ type: Actions.SUBMIT_FORM_FAIL });
    }
  } catch (e) {
    yield put({ type: Actions.SUBMIT_FORM_FAIL });
  }
}
