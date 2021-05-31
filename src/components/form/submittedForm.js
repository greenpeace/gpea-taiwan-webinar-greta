import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import content from "./content.json";
import whatsapp from "assets/images/social/whatsapp_icon.svg";

import { mainShare, whatsAppShare } from "../../share";

const buttonStyle = {
  fontSize: "1rem",
  color: "#FFFFFF",
  fontWeight: "bold",
  marginTop: "10px",
  marginBottom: "20px",
  padding: "12px 20px",
};

let SubmittedForm = ({ formContent = content }) => {
  return (
    <div className="form-submitted-content">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24}>
            <div
              className="form-header"
              dangerouslySetInnerHTML={{ __html: formContent.thanks_title }}
            ></div>
            <div
              className="form-description"
              dangerouslySetInnerHTML={{ __html: formContent.thanks_ask }}
            ></div>
            <Button
              style={{ backgroundColor: "#fda22f", ...buttonStyle }}
              block
              href={formContent.donateURL}
              target="_blank"
              rel="noreferrer"
            >
              {formContent.donate_button}
            </Button>
            <div className="sp-line"></div>
            <div
              className="form-description"
              dangerouslySetInnerHTML={{ __html: formContent.thanks_content }}
            ></div>
            <Button
              style={{ backgroundColor: "#3b5998", ...buttonStyle }}
              block
              onClick={() =>
                mainShare(
                  formContent.shareMessage,
                  formContent.fbURL,
                  formContent.mainURL
                )
              }
              rel="noreferrer"
            >
              {formContent.share_button}
            </Button>
            <Button
              style={{ backgroundColor: "#25d366", ...buttonStyle }}
              block
              onClick={() =>
                whatsAppShare(formContent.shareMessage, formContent.whatsappURL)
              }
              rel="noreferrer"
            >
              <img
                loading="lazy"
                src={whatsapp}
                alt="whatsapp"
                style={{ height: "24px" }}
              />
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SubmittedForm;
