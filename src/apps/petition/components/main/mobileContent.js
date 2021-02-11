import React from "react";
import { Grid, Row, Col } from "rsuite";
import { connect } from "react-redux";

const MobileContent = ({ content }) => {
  return (
    <div className="mobile-content-wrap">
      <Grid fluid>
        {(content || []).map((d) => {
          const { title, description } = d.content;
          return (
            <Row key={d.id}>
              <Col xs={24}>
                <div className="mobile-content">
                  <img src={d.image_url} className="img mobile-image" />
                </div>
              </Col>
              <Col xs={24}>
                <div className="mobile-content">
                  <h3>{title}</h3>
                  <div>
                    <p dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ swiper }) => {
  return {
    content: swiper.data,
  };
};

export default connect(mapStateToProps)(MobileContent);
