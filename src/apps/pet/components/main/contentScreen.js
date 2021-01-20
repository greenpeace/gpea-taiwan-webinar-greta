import React from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
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
import Banner from "../../images/wallpaper/wallpaper_banner.jpg";

const Content = () => {
  return (
    <>
      <div className="main-content-wrap">
        <FlexboxGrid align="top" justify="space-around">
          <FlexboxGrid.Item componentClass={Col} xs={24} md={24}>
            <img src={Banner} alt={"Banner"} className="img" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid>
          <FlexboxGrid.Item componentClass={Col} xs={24} md={24}>
            <h3>2020年度照片桌布/視象會議背景大放送！立即免費下載！</h3>
            <p>
              2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
            </p>
            <p>
              2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
            </p>
            <p>
              2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
            </p>
            <p>
              2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
            </p>
            <p>
              2020乃多事之年，全球新型冠狀病毒肺炎疫情肆虐，大家都沒法如過去般出國旅行慶祝佳節。因此，綠色和平特別為您拍攝一系列年度照片，內容包括自然景觀、動物奇趣等，讓大家安坐家中抗疫之餘，也能在家「眼睛去旅行」，享受我們為您提供的視覺體驗，盡力減低對地球環境的負荷！
            </p>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>

      {/** TODO: Mobile form button **/}
      <a href="#" className="start-btn cta-custom-display">
        <span> 立即聯署</span>
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

export default connect(mapStateToProps)(Content);
