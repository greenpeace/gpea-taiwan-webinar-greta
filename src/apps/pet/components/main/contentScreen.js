import React from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import { Grid, Row, Col } from "rsuite";
import Banner from "../../images/wallpaper/wallpaper_banner.jpg";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const Content = ({ togglePanel }) => {
  return (
    <>
      <div className="main-content-wrap">
        <section>
          <div className="container">
            <Grid fluid>
              <FadeInSection>
                <Row className="show-grid">
                  <Col xs={24}>
                    <div className="section-title">
                      <h2>
                        2020年度照片桌布/視像會議背景大放送！立即免費下載！
                      </h2>
                      <p>
                        2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
                      </p>
                    </div>
                  </Col>
                </Row>
              </FadeInSection>

              <FadeInSection>
                <Row className="show-grid">
                  <Col xs={24}>
                    <div className="dec-img fl-wrap">
                      <img
                        loading="lazy"
                        src={Banner}
                        alt={"Banner"}
                        className="img respimg"
                      />
                    </div>
                  </Col>
                </Row>
              </FadeInSection>

              <FadeInSection>
                <Row className="show-grid">
                  <Col xs={24}>
                    <div className="main-visual-content fl-wrap">
                      <h2>
                        2020年度照片桌布/視像會議背景大放送！立即免費下載！
                      </h2>
                      <p>
                        2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
                      </p>
                    </div>
                  </Col>
                </Row>
              </FadeInSection>

              <FadeInSection>
                <Row className="show-grid">
                  <Col xs={24}>
                    <div className="main-visual-content fl-wrap">
                      <h2>
                        2020年度照片桌布/視像會議背景大放送！立即免費下載！
                      </h2>
                      <p>
                        2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
                      </p>
                    </div>
                  </Col>
                </Row>
              </FadeInSection>
              <FadeInSection>
                <Row className="show-grid">
                  <Col xs={24}>
                    <div className="main-visual-content fl-wrap">
                      <h2>
                        2020年度照片桌布/視像會議背景大放送！立即免費下載！
                      </h2>
                      <p>
                        2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
                      </p>
                    </div>
                  </Col>
                </Row>
              </FadeInSection>
            </Grid>
          </div>
          <div className="section-number">
            <span>2020</span>
          </div>
        </section>
      </div>

      <a
        href="#"
        className="start-btn cta-custom-display"
        onClick={() => togglePanel(true)}
      >
        <span>立即聯署</span>
      </a>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
