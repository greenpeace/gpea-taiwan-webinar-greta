import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import content from "./content.json";
import whatsapp from "assets/images/social/whatsapp_icon.svg";

const buttonStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  marginBottom: "20px",
};

const donateURL =
  "http://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&campaign=fukushima&ref=fukushima-thankyou";

const mainShare = () => {
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u = "https://act.gp/3bLDMwF";
    var t = (window.innerHeight - 436) / 2;
    var l = (window.innerWidth - 626) / 2;
    window.open(
      baseURL + "?u=" + encodeURIComponent(u),
      "_blank",
      "width=626,height=436,top=" + t + ",left=" + l
    );
  };
  // WEB SHARE API
  if (navigator.share) {
    navigator
      .share({
        title: "",
        text:
          "立即聯署與綠色和平一起敦促其長期、妥善地存置這批危害生態和人體的廢水，使大家的海洋免於進一步的破壞。👉 ",
        url: "https://act.gp/3uK2A0S",
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = () => {
  var w =
    "https://api.whatsapp.com/send?text=立即聯署與綠色和平一起敦促其長期、妥善地存置這批危害生態和人體的廢水，使大家的海洋免於進一步的破壞。👉 https://act.gp/3kzJzsY";
  window.open(w);
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
            <Button
              style={{ backgroundColor: "#fda22f", ...buttonStyle }}
              block
              href={donateURL}
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
              onClick={() => mainShare()}
              rel="noreferrer"
            >
              {formContent.share_button}
            </Button>
            <Button
              style={{ backgroundColor: "#25d366", ...buttonStyle }}
              block
              onClick={() => whatsAppShare()}
              rel="noreferrer"
            >
              <img src={whatsapp} alt="whatsapp" style={{ height: "24px" }} />
            </Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SubmittedForm;
