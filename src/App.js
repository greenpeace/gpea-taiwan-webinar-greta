import React, { useEffect, Suspense } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import Spinner from "components/spinner";
import ScrollHandler from "components/spinner/scrollHandler";

const Main = React.lazy(() => import(`apps/${process.env.REACT_APP_PROJECT}`));

let App = ({ loading, submitted }) => {
  const [blockScroll, allowScroll] = ScrollHandler();
  const additionalClass = submitted ? `submitted-content` : "";
  useEffect(() => {
    loading ? blockScroll() : allowScroll();
  }, [loading, blockScroll, allowScroll]);

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
    loading: theme.lastAction === themeActions.SUBMIT_FORM,
    submitted: theme.submitted,
  };
};

App = connect(mapStateToProps)(App);

export default App;
