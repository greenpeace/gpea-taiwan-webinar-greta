import React, { useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import NewFrameForm from "../form/newFrameForm";
import newFormContent from "../form/newFormContent.json";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import "react-sliding-pane/dist/react-sliding-pane.css";

// Hook
function usePrevious(value) {
  const ref = React.useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const NewFormPanel = ({ theme, closePanel, togglePanel, newFormContent }) => {
  const prevClosePanel = usePrevious(closePanel);

  useEffect(() => {
    if (!closePanel) {
      return;
    }
    if (closePanel !== prevClosePanel && closePanel === true) {
      togglePanel(false);
    }
  }, [prevClosePanel, togglePanel, closePanel]);

  return (
    <div>
      <SlidingPane
        isOpen={theme.displayPanel}
        from="bottom"
        width="100%"
        zIndex="999"
        overlayClassName="slidingPaneClass"
        hideHeader={true}
        onRequestClose={() => null}
      >
        <NewFrameForm formContent={newFormContent} />
      </SlidingPane>
    </div>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFormPanel);
