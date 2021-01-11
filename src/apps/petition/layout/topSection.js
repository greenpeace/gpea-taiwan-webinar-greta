import React, { useState, useEffect } from 'react';
import WebTitle from 'components/text/webTitle'
import { connect } from "react-redux";
import * as woresspressActions from "store/actions/action-types/wordpress-actions";

const titleWrap = {
  position: 'relative',
  padding: '8px 16px',
  backgroundColor: '#2a93d5',
  color: '#fff',
  textAlign: 'center'
}

const titleStyle = {
  fontSize: '2rem',
  color: '#fff',
  letterSpacing: '.5rem',
  fontWeight: '500'
}

const content = {
  padding: '0 8px',
  textAlign: 'justify',
  color: 'rgba(0,0,0,.65)',
  fontSize: '1rem'
}

const TopSection = ({fetchWordpressContent}) => {
  useEffect(() => {
    fetchWordpressContent();
  }, []);
  return(
  <>
  </>
  )
}

const mapStateToProps = ({ wordpress }) => {
  return {
    wordpress: wordpress.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWordpressContent: () => {
      dispatch({ type: woresspressActions.FETCH_WORDPRESS_CONTENT_START });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);