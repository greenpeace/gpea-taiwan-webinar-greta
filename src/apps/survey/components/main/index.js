import React, { useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "apps/pet/components/header";
import Content from "./contentScreen";
import Panel from "../../../../components/panel";
import Footer from "../../../../components/footer";
import RegistrationForm from "../../../../components/form/registrationForm";

const Index = ({ initState, fakeSubmit, submitted }) => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("page") === "download") {
      fakeSubmit();
    } else {
      initState();
    }
  }, []);

  return (
    <>
      <div id="main" className={submitted ? "custom-main" : ""}>
        <Header />
        <div className="content">
          <article className="prose lg:prose-lg">
          <Content />
          </article>
          <br clear="both" />
          <Footer />
        </div>
      </div>
      <div className="custom-form-wrap">
        <RegistrationForm />
      </div>
      <Panel closePanel={submitted} />
    </>
  );
};

const mapStateToProps = ({ theme, petition }) => {
  return {
    theme: theme,
    petition: petition,
    submitted: theme.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fakeSubmit: () => {
      dispatch({ type: themeActions.SUBMIT_FORM_SUCCESS });
    },
    initState: () => {
      dispatch({ type: themeActions.INIT_STATE });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
