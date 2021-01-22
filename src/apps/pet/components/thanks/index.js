import React, { useState, useEffect } from "react";
import { FlexboxGrid, Button, Divider, Row, Col, Grid } from "rsuite";
import * as themeActions from "apps/pet/actions/index";
import { connect } from "react-redux";
// import axios from "axios";
import Sticky from "react-sticky-el";
// import fileDownload from "js-file-download";
import wallpaper from "../../../../data/wallpaper.json";

const Thanks = ({ selectedImage }) => {
  const [Arctic, setArctic] = useState([]);
  const [Forests, setForests] = useState([]);
  const [Oceans, setOceans] = useState([]);
  const [current, setCurrent] = useState([]);
  const [displayCate, setDisplayCate] = useState(false);
  const [download, setDownload] = useState(
    process.env.PUBLIC_URL + "/wallpaper/Arctic/GP0OLY_Web_size.jpg"
  );

  const campaignButton = [{label_zh:'北極', label: 'Arctic', value: Arctic},{label_zh:'森林', label: 'Forests', value: Forests},{label_zh:'海洋', label: 'Oceans', value: Oceans}]

  // const handleDownload = (url, filename) => {
  //   axios
  //     .get(url, {
  //       responseType: "blob",
  //     })
  //     .then((res) => {
  //       fileDownload(res.data, filename);
  //     });
  // };

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
    window.scrollTo(0, 0);
    setArctic(wallpaper.data.find((d) => d.issue === "Arctic"));
    setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, []);

  useEffect(() => {
    const getFirstItem = Arctic.content?.wallpaperList[0];
    setCurrent(Arctic);
    selectedImage(getFirstItem);
  }, [Arctic]);

  console.log('current.issue--', current.issue)

  return (
    <div className="show-grid full-height">
      <FlexboxGrid align="middle" className="full-height">
        <FlexboxGrid.Item componentClass={Col} xs={24} sm={10} md={12} lg={10}>
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
              <h2 className="cate-headline">揀選你喜愛的環境照片</h2>
              <Grid fluid className="cate-grid">
                <Row gutter={16}>
                {(campaignButton||[]).map(d=><Col key={d.label} xs={8} onClick={() => handleSwitchDownload(d.value)}>
                    <div className={`${current.issue===d.label ? `campaign active-campaign` : `campaign`}`}>
                      <b>{d.label_zh}</b>
                    </div>
                  </Col>)}
                  {/* <Col xs={8} onClick={() => handleSwitchDownload(Arctic)}>
                    <div className={`campaign ${current==='Arctic' && `active-campaign`}`}>
                      <b>北極</b>
                    </div>
                  </Col>
                  <Col xs={8} onClick={() => handleSwitchDownload(Forests)}>
                    <div className="campaign">
                      <b>森林</b>
                    </div>
                  </Col>
                  <Col xs={8} onClick={() => handleSwitchDownload(Oceans)}>
                    <div className="campaign">
                      <b>海洋</b>
                    </div>
                  </Col> */}
                </Row>
              </Grid>
            </div>
          </div>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item componentClass={Col} xs={24} sm={14} md={12} lg={12}>
          <Sticky
            className="thanks-download-sticky mobile-sticky"
            topOffset={0}
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <div className="thanks-download-image-wrap">
              <img
                src={process.env.PUBLIC_URL + download}
                className="img"
                alt=""
              />
              <div
                className="thanks-mobile-background-image"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${download})`,
                }}
              ></div>

              <div className="mobile-download">
                <a
                  href={`${process.env.PUBLIC_URL}${download}`}
                  download={download.split("/").pop()}
                >
                  下載
                </a>
                {/* <ButtonToolbar>
                  <IconButton
                    icon={<Icon icon="download" />}
                    onClick={() =>
                    {
                      handleDownload(`${process.env.PUBLIC_URL}${download}`, download.split("/").pop());
                    }}
                  >
                    下載
                  </IconButton>
                </ButtonToolbar> */}
              </div>
            </div>
          </Sticky>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          componentClass={Col}
          xs={24}
          sm={10}
          md={12}
          lg={10}
          align="bottom"
        >
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
