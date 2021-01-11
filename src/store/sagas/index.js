import { all, takeLatest, takeEvery } from "redux-saga/effects";
import * as Actions from "store/actions";
import { fetchWordpressContent } from "store/sagas/wordpressSaga";
import { submitForm } from "store/sagas/themeSaga";

function* rootSaga() {
  yield all([
    takeLatest(Actions.FETCH_WORDPRESS_CONTENT_START, fetchWordpressContent),
    takeLatest(Actions.SUBMIT_FORM, submitForm)
  ]);
}

export default rootSaga;
