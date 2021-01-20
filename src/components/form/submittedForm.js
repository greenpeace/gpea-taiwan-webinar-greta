import React from "react";
import { Button } from "rsuite";
import { Grid, Row, Col } from "rsuite";
import content from "./content.json";

let SubmittedForm = ({ formContent = content }) => {
  return (
    <div className="submitted-content">
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={24}>
            <div className="form-header">{formContent.thanks_title}</div>
            <div className="form-description">{formContent.thanks_content}</div>
            <div className="sp-line"></div>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={24}>
            <Button
              color="orange"
              block
              href="https://www.greenpeace.org/hongkong"
              target="_blank"
            >
              {formContent.share_button}
            </Button>
            <Button
              color="green"
              block
              href="https://www.greenpeace.org/hongkong"
              target="_blank"
            >
              {formContent.donate_button}
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SubmittedForm;
