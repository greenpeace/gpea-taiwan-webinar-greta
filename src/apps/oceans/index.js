import "./app.less";
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

const Index = ({
  initState,
  fakeSubmit,
  submitted,
  activeABTesting,
  setVariant,
}) => {
  useEffect(async () => {
    console.log(
      "process.env.REACT_APP_EXPERIMENT_ID--",
      process.env.REACT_APP_EXPERIMENT_ID
    );
    // active AB Testing
    activeABTesting(true);
    if (window.dataLayer) {
      await window.dataLayer.push({ event: "optimize.activate" });
    }

    // let countdown = 10

    const intervalId = setInterval(() => {
      // For checking loop

      // console.log('loop')
      // countdown -= 1
      // if(countdown === 0){
      //   clearInterval(intervalId);
      // }

      if (window.google_optimize !== undefined) {
        const variant = window.google_optimize.get(
          process.env.REACT_APP_EXPERIMENT_ID
        );
        if (variant === 0 || variant === undefined) {
          setVariant(0);
          //
          document.querySelector("input[name='CampaignData1__c']").value =
            "Version A";
        } else {
          setVariant(1);
          //
          document.querySelector("input[name='CampaignData1__c']").value =
            "Version B";
        }
        clearInterval(intervalId);
      }
    }, 500);

    // if (window.google_optimize) {
    //   const variant = await window.google_optimize.get(
    //     process.env.REACT_APP_EXPERIMENT_ID
    //   );
    //   console.log("variant--", variant);
    //   if (variant === 0 || variant === undefined) {
    //     setVariant(0);
    //   } else {
    //     setVariant(1);
    //   }
    // }
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
          <RegistrationForm formContent={formContent} />
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
    activeABTesting: (bol) => {
      dispatch({ type: themeActions.ACTIVE_AB_TESTING, bol });
    },
    setVariant: (value) => {
      dispatch({ type: themeActions.SET_VARIANT, value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
