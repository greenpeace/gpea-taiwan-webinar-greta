import React from "react";
import SlideContent from "./sildeConent";
import MobileContent from "./mobileContent";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

const SlideScreen = ({ togglePanel }) => {
  const handleTogglePanel = () => {
    togglePanel(true);
  };

  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 564px)",
  });

  return (
    <>
      <div className="hero-wrapper fl-wrap full-height hidden-item">
        {!isMobileDevice ? <SlideContent /> : <MobileContent />}
        <button
          style={{ width: "100%" }}
          className="start-btn cta-custom-display"
          onClick={() => handleTogglePanel()}
        >
          立即聯署 <FontAwesomeIcon icon={["fas", "pen"]} />
        </button>
      </div>
      <div className="hero-scroll-down-notifer">
        <div className="scroll-down-wrap ">
          <div className="mousey">
            <div className="scroller"></div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(null, mapDispatchToProps)(SlideScreen);
