import React, { Component, useState } from "react";
import SlidingPane from "react-sliding-pane";
import RegistrationForm from "../../../../components/form/registrationForm"
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

const Panel = ({theme}) => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false
  });
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panel);