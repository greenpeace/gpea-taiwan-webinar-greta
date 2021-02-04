import React, { useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "components/header";
import Thanks from "apps/pet/components/thanks";
import Content from "./contentScreen";
import "../../app.less";
import Panel from "components/panel";
import Footer from "components/footer";
import RegistrationForm from "components/form/registrationForm";

const URL = `https://api.greenpeace.org.hk/2021/universal/`;

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
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
            {submitted ? <Thanks /> : <Content />}
          </article>
          <br clear="both" />
          <Footer />
        </div>
      </div>
      <div className="custom-form-wrap">
        {submitted ? (
          <div className="custom-gp-form custom-gp-form-wrap">
            <div
              className="custom-bg"
              style={{
                backgroundImage:
                  "url(" + `${URL}${petition.selectedImage}` + ")",
              }}
            ></div>
          </div>
        ) : (
          <RegistrationForm />
        )}
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
