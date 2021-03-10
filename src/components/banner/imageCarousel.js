// import Swiper core and required components
import SwiperCore, {
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "apps/oceans/components/main/node_modules/swiper/swiper.scss";
import "apps/oceans/components/main/node_modules/swiper/components/navigation/navigation.scss";
import "apps/oceans/components/main/node_modules/swiper/components/pagination/pagination.scss";
import "apps/oceans/components/main/node_modules/swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Scrollbar, A11y, Parallax, Autoplay]);

export default () => {
  return (
    <Swiper
      parallax
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div
          className="bg"
          data-bg="https://cdn.shopify.com/s/files/1/0045/4875/5546/files/demo-banner-01_2.jpg?v=1608248550"
          style={{
            backgroundImage:
              "url(" +
              "https://cdn.shopify.com/s/files/1/0045/4875/5546/files/demo-banner-01_2.jpg?v=1608248550" +
              ")",
          }}
          data-swiper-parallax="20%"
        ></div>
        <div className="overlay"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="bg"
          data-bg="https://cdn.shopify.com/s/files/1/0045/4875/5546/files/2048_2.jpg?v=1608253744"
          style={{
            backgroundImage:
              "url(" +
              "https://cdn.shopify.com/s/files/1/0045/4875/5546/files/2048_2.jpg?v=1608253744" +
              ")",
          }}
          data-swiper-parallax="20%"
        ></div>
        <div className="overlay"></div>
      </SwiperSlide>
    </Swiper>
  );
};
