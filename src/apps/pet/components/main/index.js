import React from 'react';
import * as swiperActions from "store/actions/action-types/swiper-actions";
import { connect } from "react-redux";
import Header from "apps/pet/components/header";
import Aside from "apps/pet/components/aside";
import SlideScreen from "./slideScreen"

const Index = () => {
  return (
    <div id="main">
      <Header />
      {/* <Aside /> */}
      <div id="wrapper">
        <div className="content full-height" data-pagetitle="Home slider">
          <div className="fl-wrap full-height hero-conatiner">
            <SlideScreen/>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
