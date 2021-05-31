import React, { useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import NewFrameForm from "../form/newFrameForm";
import NewFrameSubmittedForm from "../form/newFrameSubmittedForm";
import { connect } from "react-redux";
import { Box } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
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

const NewFormPanel = ({
  theme,
  closePanel,
  togglePanel,
  formContent,
  submitted,
  children,
  showProgress,
  newsLetter,
  birthDate,
}) => {
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
    <>
      {theme.displayPanel && (
        <Box
          pos="fixed"
          style={{ top: 10, right: 10, zIndex: 9999 }}
          p={2}
          bgColor="#FFF"
          borderRadius={"20px"}
          onClick={() => togglePanel(false)}
        >
          <SmallCloseIcon w={6} h={6} />
        </Box>
      )}
      <SlidingPane
        isOpen={theme.displayPanel}
        from="bottom"
        width="100%"
        zIndex="999"
        overlayClassName="slidingPaneClass"
        hideHeader={true}
        onRequestClose={() => null}
      >
        {children}
        {submitted ? (
          <NewFrameSubmittedForm formContent={formContent} />
        ) : (
          <NewFrameForm
            formContent={formContent}
            showProgress={showProgress}
            newsLetter={newsLetter}
            birthDate={birthDate}
          />
        )}
      </SlidingPane>
    </>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
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
