import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

const Index = ({ toggleTheme }) => {
  useEffect(() => {
    toggleTheme(false);
  }, [toggleTheme]);

  return (
    <header className="main-header">
      <a href="/" className="logo-holder">
        <img
          loading="lazy"
          src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
          alt=""
        />
      </a>
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
