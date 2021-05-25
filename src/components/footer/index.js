import React from "react";
import { Grid, Row, Col } from "rsuite";

let Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={24} lg={12}>
              <p>綠色和平存在，因為脆弱的地球需要改變、需要行動。</p>
              <p>
                但保護地球的使命不能僅靠綠色和平來完成，唯有結合你的力量，才能夠讓地球變得更綠色、更和平。
              </p>
            </Col>
            <Col xs={24} lg={12}>
              <ul>
                <li>
                  <a
                    href="http://www.greenpeace.org/hongkong/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    首頁
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    私隱政策與個人資料收集聲明
                  </a>
                </li>
                <li>
                  <a
                    href="https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK"
                    target="_blank"
                    rel="noreferrer"
                  >
                    捐助支持
                  </a>
                </li>
              </ul>
              <span>© GREENPEACE {new Date().getFullYear()}</span>
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
