import React from "react";
import * as themeActions from "store/actions/action-types/theme-actions";
import { connect } from "react-redux";
import Header from "apps/pet/components/header";
import Thanks from "apps/pet/components/thanks";
import Content from "./contentScreen";

const Index = ({ submitted }) => {
  return (
    <div id="main" className={submitted ? "custom-main" : ""}>
      <Header />
      <div id="wrapper">
        <div className="content full-height" data-pagetitle="Home slider">
          <div className="fl-wrap full-height hero-conatiner">
            <article className="prose lg:prose-lg">
              {submitted ? <Thanks /> : <Content />}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

export default connect(mapStateToProps)(Index);
