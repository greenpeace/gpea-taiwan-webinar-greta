import React, { useState, useEffect } from 'react';
import * as swiperActions from "store/actions/action-types/swiper-actions";
import { connect } from "react-redux";
import SlideScreen from "./slideScreen"
import RegistrationScreen from "apps/petition/components/main/registrationScreen"

const Index = ({theme}) => {
  return (
    <div className="content full-height" data-pagetitle="Home slider">
      {/* <div className="form-wrapper">
        <RegistrationScreen/>
      </div> */}
      <div className="fl-wrap full-height hero-conatiner">
        <SlideScreen/>
        {/* <div className="hero-slider-wrap_pagination"></div> */}
        <div className="hero-scroll-down-notifer">
          <div className="scroll-down-wrap ">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
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
