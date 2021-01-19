import React, { useState, useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import {
  FlexboxGrid,
  ButtonToolbar,
  Button,
  IconButton,
  Icon,
  fluid,
  gutter,
  Row,
  Col,
  Grid,
} from "rsuite";
import { connect } from "react-redux";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Sticky from "react-sticky-el";
import fileDownload from "js-file-download";
import wallpaper from "../../../../data/wallpaper.json";

// install Swiper components
SwiperCore.use([Scrollbar, A11y]);

const Thanks = () => {
  const [Arctic, setArctic] = useState([]);
  const [Forests, setForests] = useState([]);
  const [Oceans, setOceans] = useState([]);
  const [current, setCurrent] = useState([]);
  const [displayCate, setDisplayCate] = useState(false);
  const [download, setDownload] = useState(
    "/wallpaper/Arctic/GP0OLY_Web_size.jpg"
  );

  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  const handleSwitchDownload = (cate) => {
    const getFirstItem = cate.content?.wallpaperList[0];
    setDownload(getFirstItem);
    setCurrent(cate);
  };

  useEffect(() => {
    setArctic(wallpaper.data.find((d) => d.issue === "Arctic"));
    setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, [wallpaper]);

  useEffect(() => {
    setCurrent(Arctic);
  }, [Arctic]);

  return (
    <div className="show-grid full-height">
      <FlexboxGrid
        align="middle"
        justify="space-around"
        className="full-height"
      >
        <FlexboxGrid.Item componentClass={Col} xs={24} md={9}>
          <div className="thanks-content">
            <h2>感謝您的下載！</h2>
            <p>您願意進一步行動，捐助支持綠色和平更多環境項目嗎？</p>
            <p>
              守護海洋，保衛森林，我們需要您的支持為環境堅持努力。綠色和平不接受政府、企業捐款，請立刻加入我們的
              <b>1%會員計畫，以您的1%收入，支持我們的100%財政獨立。</b>
            </p>
            <Grid fluid>
              <Row gutter={12}>
                <Col xs={12}>
                  <Button
                    className="button-donate"
                    size="lg"
                    appearance="default"
                    block
                  >
                    <b>捐助支持</b>
                  </Button>
                </Col>
                <Col xs={12}>
                  <Button
                    className="button-share"
                    size="lg"
                    appearance="default"
                    block
                  >
                    <b>分享</b>
                  </Button>
                </Col>
              </Row>
            </Grid>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          componentClass={Col}
          xs={24}
          md={10}
          style={{ padding: 0 }}
        >
          <Sticky
            className="mobile-sticky"
            topOffset={60}
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <div className="thanks-download-image-wrap">
              <img src={download} className="img" />
              <div
                className="thanks-mobile-background-image"
                style={{ backgroundImage: `url(${download})` }}
              ></div>
              <div className="mobile-download">
                <ButtonToolbar>
                  <IconButton
                    icon={<Icon icon="download" />}
                    onClick={() => {
                      handleDownload(download, download.split("/").pop());
                    }}
                  >
                    下載
                  </IconButton>
                </ButtonToolbar>
              </div>
            </div>
          </Sticky>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} xs={24} md={24} align="bottom">
          <div className="thanks-slider-wrap">
            {/* <Swiper spaceBetween={5} slidesPerView={1}>
            <SwiperSlide> */}
            <Grid fluid>
              <Row gutter={12}>
                {current.content?.wallpaperList.map((d, i) => (
                  <Col
                    key={i}
                    xs={12}
                    md={8}
                    className="wallpaper-thumbnail-col"
                    onClick={() => setDownload(d)}
                  >
                    <div
                      className="img wallpaper-thumbnail wallpaper-thumbnail-mobile"
                      style={{ backgroundImage: `url(${d})` }}
                    ></div>
                  </Col>
                ))}
              </Row>
            </Grid>
            {/* </SwiperSlide>
          </Swiper> */}
          </div>
        </FlexboxGrid.Item>
      </FlexboxGrid>
      {displayCate && (
        <div className="cate-switcher">
          <Grid fluid>
            <Row gutter={16}>
              <Col xs={8} onClick={() => handleSwitchDownload(Arctic)}>
                <Button color="yellow" appearance="default" block>
                  <b>Arctic</b>
                </Button>
              </Col>
              <Col xs={8} onClick={() => handleSwitchDownload(Forests)}>
                <Button color="orange" appearance="default" block>
                  <b>Forests</b>
                </Button>
              </Col>
              <Col xs={8} onClick={() => handleSwitchDownload(Oceans)}>
                <Button color="cyan" appearance="default" block>
                  <b>Oceans</b>
                </Button>
              </Col>
            </Row>
          </Grid>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);
