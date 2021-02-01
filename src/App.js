import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "rsuite/lib/styles/index.less";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "App.less";

import Spinner from "components/spinner";
import ScrollHandler from "components/spinner/scrollHandler";

import Main from "apps/survey/components/main";

let App = ({ loading, submitted }) => {
  const [blockScroll, allowScroll] = ScrollHandler();
  useEffect(() => {
    loading ? blockScroll() : allowScroll();
  }, [loading, blockScroll, allowScroll]);

  return (
    <div className={`App ${submitted && `submitted-content`}`}>
      {loading && <Spinner />}
      <Main />
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    loading: theme.lastAction === themeActions.SUBMIT_FORM,
    submitted: theme.submitted,
  };
};

App = connect(mapStateToProps)(App);

export default App;
