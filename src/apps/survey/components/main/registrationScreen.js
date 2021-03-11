import React, { useState, useEffect } from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import RegistrationForm from "./registrationForm";

const RegistrationScreen = () => {
  return <RegistrationForm />;
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
