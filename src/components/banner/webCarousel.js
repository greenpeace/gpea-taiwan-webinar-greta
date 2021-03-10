import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="half-hero-wrap">
                <div className="hhw_header">綠色和平</div>
                <h1>
                  <span>美麗海洋已變了調</span>
                </h1>
                <h4>
                  海底世界既神秘又美麗，蘊藏著豐富的魚種生態，但如此純淨的海洋，卻一再遭受過度捕撈以及大量的塑膠污染；更令人難過的是，隨著氣候變遷的惡化，使得海洋酸化、珊瑚白化的情況越來越嚴重，一場全面性的生態浩劫正急遽展開。{" "}
                </h4>
                <div className="clearfix"></div>
                <a
                  href="javascript:void(0)"
                  className="btn fl-btn color-bg"
                  onClick={() => toggleTheme(true)}
                >
                  <span>聯署</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
