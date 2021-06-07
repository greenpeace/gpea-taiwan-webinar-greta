import React, { useState, useEffect } from "react";
import SwiperCore, { Mousewheel, Scrollbar, A11y, Autoplay } from "swiper";
import { Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const Index = ({ swiperData, slideIndex, style }) => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (!swiper) {
      return;
    }

    swiper.slideTo(slideIndex, 1000);
  }, [slideIndex]);

  useEffect(() => {
    const mySwiper = document.querySelector(".simple-swiper").swiper;
    setSwiper(mySwiper);
  }, []);

  return (
    <Swiper allowTouchMove={false} autoplay={{ delay: 3000 }} slidesPerView={1} className={'simple-swiper'}>
      {(swiperData || []).map((d, i) => {
        return (
          <SwiperSlide key={i}>
            <Image src={d} style={style}/>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Index;
