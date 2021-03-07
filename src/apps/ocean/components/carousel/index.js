import React, { useState, useEffect } from "react";
import SwiperCore, { Parallax, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { connect } from "react-redux";

SwiperCore.use([A11y, Parallax, Autoplay]);

const Index = ({ swiperData, updateSwiperSlide, slideIndex }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper) {
      return;
    }
    swiper.slideTo(slideIndex, 1200);
  }, [slideIndex]);

  useEffect(() => {
    const mySwiper = document.querySelector(".swiper-container").swiper;
    setSwiper(mySwiper);
  }, []);

  return (
    <Swiper parallax>
      {(swiperData || []).map((d) => (
        <SwiperSlide key={d.id}>
          <div
            className="bg"
            data-bg={d.image_url}
            style={{ backgroundImage: "url(" + d.image_url + ")" }}
            data-swiper-parallax="40%"
          ></div>
          <div className="overlay"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const mapStateToProps = ({ swiper }) => {
  return {
    swiperData: swiper.data,
    slideIndex: swiper.slideIndex,
  };
};

export default connect(mapStateToProps)(Index);
