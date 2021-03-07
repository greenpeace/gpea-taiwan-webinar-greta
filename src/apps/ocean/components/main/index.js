import React, { useEffect } from "react";
import * as swiperActions from "store/actions/action-types/swiper-actions";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import SlideScreen from "./slideScreen";
import Aside from "../aside";
import Header from "../header";
import Panel from "components/panel";
import RegistrationForm from "components/form/registrationForm";
import SubmittedForm from "components/form/submittedForm";
import formContent from "./formContent.json";

import "../../app.less";

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
      <Helmet>
        <html lang="zh" />
        <title>守護海洋，攜手成立全球海洋保護區！ - Greenpeace 綠色和平 | 香港</title>
        <meta
          property="og:title"
          content="守護海洋，攜手成立全球海洋保護區！ - Greenpeace 綠色和平 | 香港"
        />
        <meta
          name="description"
          content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
        />
        <meta
          property="og:description"
          content="海洋的面積占地球71%，是世界最大的供氧來源，也孕育豐富的生物多樣性，包含鯨魚、海豚、海龜、珊瑚等美妙海洋生物。然而，海洋現在卻因塑膠污染、非法捕魚、氣候變遷等面臨前所未有的重大生態危機。我們需要更多人一起站出來聯署加入，並捐款資助綠色和平！"
        />
        <meta
          property="og:image"
          content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/02/e1abe0f4-20210225_fukushima10th_petition_thumbnial-02.jpg"
        />
      </Helmet>
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
          <RegistrationForm formContent={formContent}/>
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
