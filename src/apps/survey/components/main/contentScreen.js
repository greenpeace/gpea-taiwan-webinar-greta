import React from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import SurveyForm from "components/form/surveyForm"
import { connect } from "react-redux";

const Content = ({ togglePanel }) => {
  return (
    <>
      <div className="main-content-wrap">
        <section>
          <div className="container">
          <SurveyForm/>
          </div>
          <div className="section-number">
            <span>問卷調查</span>
          </div>
        </section>
      </div>

      {/* <a
        href="#"
        className="start-btn cta-custom-display"
        onClick={() => togglePanel(true)}
      >
        <span>提交</span>
      </a> */}
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
