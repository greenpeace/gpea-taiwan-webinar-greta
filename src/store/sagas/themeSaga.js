import { call, put } from "redux-saga/effects";
import qs from "qs";
import axios from "axios";
import * as Actions from "../actions/action-types/theme-actions";

const GREEENPEACE_FORM_URL = "https://cloud.greenhk.greenpeace.org/petition-pp"; // process.env.REACT_APP_WORDPRESS_URL

export function* submitForm(actions) {
  // console.log('actions.form--', actions.form)
  const formData = qs.stringify({
    ...actions.form,
    CampaignId: "7012u000000OxDYAA0",
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
  });

  // console.log('formData--', formData)

  try {
    // yield delay(800)
    // yield put({ type: Actions.SUBMIT_FORM_SUCCESS});
    const response = yield call(() =>
      axios.post(`${GREEENPEACE_FORM_URL}`, formData)
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
