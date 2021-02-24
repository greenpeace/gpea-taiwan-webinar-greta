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

const Index = ({ submitted }) => {
  return (
    <>
      <Helmet>
        <title>Greenpeace 綠色和平 ｜ 制止日本政府將核廢水從福島排放到太平洋</title>
      </Helmet>
      <div id="main" className="fukushima">
        <Header />
        <Aside />
        <div id="wrapper">
          <div className="content full-height" data-pagetitle="Home slider">
            <SlideScreen />
          </div>
        </div>
      </div>
      <div className="custom-form-wrap">
        <RegistrationForm />
      </div>
      <Panel closePanel={submitted} />
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
