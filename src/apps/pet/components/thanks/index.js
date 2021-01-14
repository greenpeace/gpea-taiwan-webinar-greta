import React from 'react';
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";

const Thanks = () => {
  return (
    <div className="hero-wrapper fl-wrap full-height hidden-item">
      Thanks
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Thanks);


