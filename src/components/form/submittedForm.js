import React from "react";
import { Button, Grid, Row, Col } from "rsuite";
import content from "./content.json";
import whatsapp from "assets/images/social/whatsapp_icon.svg";

const buttonStyle = {
  color: "#FFFFFF",
  fontWeight: "bold",
  marginBottom: "15px",
};

const mainShare = (event) => {
  event.preventDefault();
  //
  const fbShare = () => {
    var baseURL = "https://www.facebook.com/sharer/sharer.php";
    var u =
      "https://cloud.greenhk.greenpeace.org/petition-oceans-elm?utm_campaign=elm&utm_source=facebook&utm_medium=social&utm_content=main_share#/";
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
          "海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 ",
        url: "https://act.gp/38bpvc8",
      })
      .then()
      .catch();
  } else {
    fbShare();
  }
};

const whatsAppShare = (event) => {
  event.preventDefault();
  var w =
    "https://api.whatsapp.com/send?text=海洋住屋不對立，為了珍貴脆弱的香港海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」方案！👉 https://act.gp/2JN5EXm";
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
              link="https://supporter.ea.greenpeace.org/hk/s/donate"
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
