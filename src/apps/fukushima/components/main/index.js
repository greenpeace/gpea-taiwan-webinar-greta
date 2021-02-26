import React from "react";
import * as swiperActions from "store/actions/action-types/swiper-actions";
import { connect } from "react-redux";
import { Helmet } from "react-helmet-async";
import "../../app.less";
import SlideScreen from "./slideScreen";
import Aside from "../aside";
import Header from "../header";
import Panel from "components/panel";
import RegistrationForm from "components/form/registrationForm";
import SubmittedForm from "components/form/submittedForm";
import formContent from "./formContent.json";

const Index = ({ submitted }) => {
  return (
    <>
      <Helmet>
        <html lang="zh" />
        <title>福島十年 力阻核廢水排放 - Greenpeace 綠色和平 | 香港</title>
        <meta
          property="og:title"
          content="福島十年 力阻核廢水排放 - Greenpeace 綠色和平 | 香港"
        />
        <meta
          name="description"
          content="福島第一核電廠事故已經發生十年。日本政府在十年後欲將123萬噸對人體及海洋有害的核廢水，排放到太平洋。請即聯署阻止核廢水污染大海，一起守護海洋生態。"
        />
        <meta
          property="og:description"
          content="福島第一核電廠事故已經發生十年。日本政府在十年後欲將123萬噸對人體及海洋有害的核廢水，排放到太平洋。請即聯署阻止核廢水污染大海，一起守護海洋生態。"
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
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
