import React, { useEffect, Suspense } from "react";
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

const Main = React.lazy(() => import(`apps/${process.env.REACT_APP_PROJECT}/components/main`));

const isIGApp = () => {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("Instagram") > -1);
}

let App = ({ loading, submitted }) => {
  const [blockScroll, allowScroll] = ScrollHandler();
  const additionalClass = submitted ? `submitted-content` : ''
  const isIG = isIGApp() ? 'isIG' : ''
  useEffect(() => {
    loading ? blockScroll() : allowScroll();
  }, [loading, blockScroll, allowScroll]);

  return (
    <div className={`App ${additionalClass} ${isIG}`}>
      {loading && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
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
