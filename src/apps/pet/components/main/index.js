import React, { useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "apps/pet/components/header";
import Thanks from "apps/pet/components/thanks";
import Content from "./contentScreen";
import Panel from "../../../../components/panel";
import RegistrationForm from "../../../../components/form/registrationForm";

const Index = ({ initFormState, fakeSubmit, submitted, petition }) => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("page") === "thanks") {
      fakeSubmit();
    } else {
      initFormState();
    }
  }, []);

  console.log('petition--', petition.selectedImage)

  return (
    <>
      <div id="main" className={submitted ? "custom-main" : ""}>
        <Header />
        <div id="wrapper">
          <div className="content full-height" data-pagetitle="Home slider">
            <div className="fl-wrap full-height hero-conatiner">
              <article className="prose lg:prose-lg">
                {submitted ? <Thanks /> : <Content />}
              </article>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-form-wrap">
        {submitted ? (
          <div className="custom-gp-form custom-gp-form-wrap">
            <div className="custom-bg" style={{backgroundImage: "url(" + petition.selectedImage + ")"}}></div>
          </div>
        ) : (
          <RegistrationForm />
        )}
      </div>
      <Panel />
    </>
  );
};

const mapStateToProps = ({ theme, petition }) => {
  return {
    theme: theme,
    petition: petition,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initFormState: () => {
      dispatch({ type: themeActions.INIT_FORM_STATE });
    },
    fakeSubmit: () => {
      dispatch({ type: themeActions.SUBMIT_FORM_SUCCESS });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
