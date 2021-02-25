import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import content from "./content.json";
import whatsapp from "assets/images/social/whatsapp_icon.svg";

const buttonStyle = {color: '#FFFFFF', fontWeight: 'bold', marginBottom: '15px'}

let SubmittedForm = ({ formContent = content }) => {
  return (
    <div className="form-submitted-content">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24}>
            <div className="form-header">{formContent.thanks_title}</div>
            <div className="form-description" dangerouslySetInnerHTML={{__html: formContent.thanks_content}}></div>
            <div className="sp-line"></div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={24}>
            <Button
              style={{backgroundColor: '#fda22f', ...buttonStyle}}
              block
              href="https://www.greenpeace.org/hongkong"
              target="_blank"
              rel="noreferrer"
            >
              {formContent.share_button}
            </Button>
            <Button
              style={{backgroundColor: '#3b5998', ...buttonStyle}}
              block
              href="https://www.greenpeace.org/hongkong"
              target="_blank"
              rel="noreferrer"
            >
              {formContent.donate_button}
            </Button>
            <Button
              style={{backgroundColor: '#25d366', ...buttonStyle}}
              block
              onClick={()=>console.log('share')}
              rel="noreferrer"
            >
              <img src={whatsapp} style={{height: '24px'}}/>
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SubmittedForm;
