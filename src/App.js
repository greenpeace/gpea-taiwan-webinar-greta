import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import Spinner from "components/spinner";
import ScrollHandler from "components/spinner/scrollHandler";

const Main = React.lazy(() => import(`apps/${process.env.REACT_APP_PROJECT}`));

let App = ({ loading, submitted, showPanel, fakeSubmit }) => {
  const [blockScroll, allowScroll] = ScrollHandler();
  const additionalClass = submitted ? `submitted-content` : "";
  useEffect(() => {
    (loading || showPanel) ? blockScroll() : allowScroll();
  }, [loading, showPanel, blockScroll, allowScroll]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (urlParams.get("page") === "2") {
      fakeSubmit();
    }
  }, []);

  return (
    <div className={`App ${additionalClass}`}>
      {loading && <Spinner />}
      <Suspense fallback={<Spinner />}>
        <Main />
      </Suspense>
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    showPanel: theme.displayPanel,
    loading: theme.lastAction === themeActions.SUBMIT_FORM,
    submitted: theme.submitted,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fakeSubmit: () => {
      dispatch({ type: themeActions.SUBMIT_FORM_SUCCESS });
    },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
