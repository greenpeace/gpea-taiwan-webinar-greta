import React, { useState, useEffect } from "react";
import {
  FlexboxGrid,
  ButtonToolbar,
  Button,
  Divider,
  IconButton,
  Icon,
  fluid,
  gutter,
  Row,
  Col,
  Grid,
} from "rsuite";
import * as themeActions from "apps/pet/actions/index";
import { connect } from "react-redux";
import SwiperCore, { Scrollbar, A11y } from "swiper";
import axios from "axios";
import Sticky from "react-sticky-el";
import fileDownload from "js-file-download";
import wallpaper from "../../../../data/wallpaper.json";

// install Swiper components
SwiperCore.use([Scrollbar, A11y]);

const Thanks = ({ selectedImage }) => {
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
    selectedImage(getFirstItem);
    setCurrent(cate);
  };

  const handleSetDownload = (d) => {
    setDownload(d);
    selectedImage(d);
  };

  useEffect(() => {
    setArctic(wallpaper.data.find((d) => d.issue === "Arctic"));
    setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, [wallpaper]);

  useEffect(() => {
    const getFirstItem = Arctic.content?.wallpaperList[0];
    setCurrent(Arctic);
    selectedImage(getFirstItem);
  }, [Arctic]);

  return (
    <div className="show-grid full-height">
      <FlexboxGrid align="middle" className="full-height">
        <FlexboxGrid.Item componentClass={Col} xs={24} md={10}>
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
            <Divider />
            <div className="cate-switcher">
              <p className="cate-headline">揀選你喜愛的環境照片</p>
              <Grid fluid className="cate-grid">
                <Row gutter={16}>
                  <Col xs={8} onClick={() => handleSwitchDownload(Arctic)}>
                    <b>北極</b>
                  </Col>
                  <Col xs={8} onClick={() => handleSwitchDownload(Forests)}>
                    <b>森林</b>
                  </Col>
                  <Col xs={8} onClick={() => handleSwitchDownload(Oceans)}>
                    <b>海洋</b>
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} xs={24} md={12}>
          <Sticky
            className="thanks-download-sticky mobile-sticky"
            topOffset={0}
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <div className="thanks-download-image-wrap">
              <img src={download} className="img" />
              <div
                className="thanks-mobile-background-image"
                style={{ backgroundImage: `url(${download})` }}
              ></div>

              {/* <div className="mobile-download">
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
              </div> */}
            </div>
          </Sticky>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} xs={24} md={10} align="bottom">
          <div className="thanks-slider-wrap">
            <Grid fluid>
              <Row gutter={16}>
                {current.content?.wallpaperList.map((d, i) => (
                  <Col
                    key={i}
                    xs={12}
                    md={8}
                    className="wallpaper-thumbnail-col"
                    onClick={() => handleSetDownload(d)}
                  >
                    <div
                      className="img wallpaper-thumbnail wallpaper-thumbnail-mobile"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}${d})`,
                      }}
                    ></div>
                  </Col>
                ))}
              </Row>
            </Grid>
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

const mapDispatchToProps = (dispatch) => {
  return {
    selectedImage: (src) => {
      dispatch({ type: themeActions.SWITCH_SELECTED_IMAGE, src });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);
