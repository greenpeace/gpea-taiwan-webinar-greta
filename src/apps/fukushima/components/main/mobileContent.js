import React from "react";
import { Grid, Row, Col } from "rsuite";
import { connect } from "react-redux";
import swiperContent from "../../data/swiper.json";

const MobileContent = () => {
  const {data = []} = swiperContent
  return (
    <div className="mobile-content-wrap">
      <Grid fluid>
        {(data || []).map((d) => {
          const { title, description } = d.content;
          return (
            <Row key={d.id}>
              {d.image_url && (
                <Col xs={24}>
                  <img
                    src={d.image_url}
                    alt={description}
                    className="img mobile-image"
                  />
                </Col>
              )}
              <Col xs={24}>
                {title && <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>}
                <div className="mobile-content">
                  <div dangerouslySetInnerHTML={{ __html: description }} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Grid>
    </div>
  );
};

export default MobileContent;
