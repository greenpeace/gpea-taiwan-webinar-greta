import React, { useEffect } from "react";
import * as swiperActions from "store/actions/action-types/swiper-actions";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";

import SEO from "./SEO";
import RegistrationForm from "components/form/registrationForm";
import SubmittedForm from "components/form/submittedForm";
import SlideScreen from "./components/main/slideScreen";
import Aside from "./components/aside";
import Header from "./components/header";
import Panel from "components/panel";
import formContent from "./data/formContent.json";

import "./app.less";

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("page") === "2") {
      fakeSubmit();
    } else {
      initState();
    }
  }, []);

  return (
    <>
      <SEO />
      <div id="main">
        <Header />
        <Aside />
        <div id="wrapper">
          <div className="content full-height" data-pagetitle="Home slider">
            <SlideScreen />
          </div>
        </div>
      </div>
      <div className="custom-form-wrap">
        {submitted ? (
          <SubmittedForm formContent={formContent} />
        ) : (
          <RegistrationForm />
        )}
      </div>
      <Panel formContent={formContent} />
    </>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme,
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
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
