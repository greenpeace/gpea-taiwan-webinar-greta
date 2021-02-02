import React, { useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "components/header";
import Content from "./contentScreen";
import Footer from "components/footer";

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
      <div className="custom-gp-form custom-gp-form-wrap">
            <div
              className="custom-bg"
              style={{
                backgroundImage:
                  "url(" + `https://api.greenpeace.org.hk/2021/universal//wallpaper/Oceans/GP0STOE38_Web_size.jpg` + ")",
              }}
            ></div>
          </div>
      </div>
      {/* <Panel closePanel={submitted} /> */}
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
