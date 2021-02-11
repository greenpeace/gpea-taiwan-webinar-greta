import React from "react";
import Banner from "apps/petition/components/banner";
import Carousel from "apps/petition/components/carousel";
import * as swiperActions from "store/actions/action-types/swiper-actions";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideContent = ({
  swiper,
  slideIndex,
  updateSwiperSlide
}) => {
  const currentSlide = `${
    slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`
  }`;
  const totalSlide = `${
    swiper.length >= 10 ? swiper.length : `0${swiper.length}`
  }`;

  const handleUpdateSlide = (direction) => {
    let updateSlide = 0;
    switch (direction) {
      case "prev":
        updateSlide = slideIndex === 0 ? swiper.length : slideIndex--;
        updateSwiperSlide(updateSlide - 1);
        break;
      case "next":
        updateSlide = slideIndex + 1 >= swiper.length ? 0 : (slideIndex += 1);
        updateSwiperSlide(updateSlide);
        break;
      default:
        updateSwiperSlide(0);
    }
  };

  return (
    <>
    <div className="hero-wrapper fl-wrap full-height hidden-item">
        <div className="video-wrap">
          <div className="videobg">
            {/* <video autoPlay muted>
            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm" type="video/webm"/>
            <source src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4"/>
          </video> */}
          </div>
        </div>
        <span className="hc_dec"></span>
        <div className="hero-slider-wrap home-half-slider fl-wrap full-height">
          <div className="hero-slider fs-gallery-wrap fl-wrap full-height">
            <Banner />
          </div>
        </div>
        <div className="hero-slider-img hero-slider-wrap_halftwo hidden-item">
          <Carousel />
          <div className="hero-corner-dec"></div>
        </div>
        <div className="clone-counter">
          <div className="current">{currentSlide}</div>
        </div>
        <div className="swiper-counter hs_counter">
          <div className="current">{currentSlide}</div>
          <div className="total">{totalSlide}</div>
        </div>
        <div className="hero-slider_control-wrap">
          <div
            className="hsc hsc-prev"
            onClick={() => handleUpdateSlide("prev")}
          >
            <span>
              <FontAwesomeIcon icon={["fas", "arrow-left"]} />
            </span>{" "}
          </div>
          <div
            className="hsc hsc-next"
            onClick={() => handleUpdateSlide("next")}
          >
            <span>
              <FontAwesomeIcon icon={["fas", "arrow-right"]} />
            </span>
          </div>
        </div>
        </div>
    </>
  );
};

const mapStateToProps = ({ swiper }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSwiperSlide: (data) => {
      dispatch({ type: swiperActions.UPDATE_SWIPER_SLIDE, data });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlideContent);
