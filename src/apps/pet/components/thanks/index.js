import React from 'react';
import * as themeActions from "store/actions/action-types/theme-actions";
import { FlexboxGrid, ButtonToolbar, IconButton,Icon } from "rsuite";
import { connect } from "react-redux";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios'
import fileDownload from 'js-file-download'

// install Swiper components
SwiperCore.use([Scrollbar, A11y]);

const Thanks = () => {

  const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }

  return (
      <div className="show-grid full-height">
      <FlexboxGrid align="middle" justify="space-around" className="full-height">
        <FlexboxGrid.Item colspan={9}>
          <div className="thanks-content">
            <h1>感謝您的聯署!</h1>
              <p>
              為維持公正獨立，持續向政府、企業提出訴求，綠色和平100%倚賴如您一般的支持者捐助，以直接行動帶來改變。您願意加入我們嗎？
              清空原始森林及重要生態系統，換來畜牧場和大豆種植園；大火帶來的大量碳排放，更加劇全球氣候危機
            </p>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={15}>
          <div className="thanks-download-image-wrap">
            <img src="https://www.greenpeace.org/static/planet4-taiwan-stateless/2020/06/230499e4-gp036zk_medium_res-polar-bears-in-canada.jpg" className="img"/>
            <ButtonToolbar>
              <IconButton icon={<Icon icon="download" />} onClick={() => {handleDownload('http://localhost:3000/wallpaper/demo.jpg', 'wallpaper-01.jpg')}}>下載</IconButton>
            </ButtonToolbar>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item colspan={24} align="bottom">
          <div className="thanks-slider-wrap">
          <Swiper
            spaceBetween={10}
            slidesPerView={12}
            // navigation
            // observer={true}
            // observeParents={true}
            // parallax={true}
            // scrollbar={{ draggable: true }}
          >
          {Array.from({ length: 36 }).map(d=>
            <SwiperSlide>
              <img src="https://www.greenpeace.org/static/planet4-taiwan-stateless/2020/06/230499e4-gp036zk_medium_res-polar-bears-in-canada.jpg" className="img"/>
            </SwiperSlide>
          )}
          </Swiper>
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);


