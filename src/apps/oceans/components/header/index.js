import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

const Index = ({ toggleTheme }) => {
  useEffect(() => {
    toggleTheme(false);
  }, [toggleTheme]);

  return (
    <header className="main-header">
      <div className="logo-holder">
        <img
          src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
          alt="Greenpeace 綠色和平"
        />
      </div>
    </header>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
