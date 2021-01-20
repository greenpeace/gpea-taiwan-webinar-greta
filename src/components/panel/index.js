import React, { useEffect, useState } from "react";
import SlidingPane from "react-sliding-pane";
import RegistrationForm from "../form/registrationForm"
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

// Hook
function usePrevious(value) {
  const ref = React.useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}


const Panel = ({theme, closePanel, togglePanel}) => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false
  });
  const prevClosePanel = usePrevious(closePanel)

  useEffect(() => {
    if(!closePanel){
      return
    }
    if(closePanel !== prevClosePanel && closePanel === true){
      togglePanel(false)
    }
  }, [closePanel]);

  return (
    <div>
      <SlidingPane
          isOpen={theme.displayPanel}
          from="bottom"
          width="100%"
          onRequestClose={() => setState({ isPaneOpenBottom: false })}
        >
          <RegistrationForm/>
        </SlidingPane>
    </div>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {
    swiper: swiper.data,
    slideIndex: swiper.slideIndex,
    theme: theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);