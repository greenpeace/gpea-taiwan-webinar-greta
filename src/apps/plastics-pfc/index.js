import "swiper/swiper.scss";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Landing from "./pages/landing";
import Download from "./pages/download";
import * as themeActions from "store/actions/action-types/theme-actions";

const Index = ({ submitted, activeABTesting, setVariant, togglePanel }) => {
  const [submittedForm, setSubmittedForm] = useState(submitted);
  useEffect(() => {
    async function checkVariant() {
      // active AB Testing
      activeABTesting(true);
      if (window.dataLayer) {
        await window.dataLayer.push({ event: "optimize.activate" });
      }

      const intervalId = setInterval(() => {
        if (window.google_optimize !== undefined) {
          const variant = window.google_optimize.get(
            process.env.REACT_APP_EXPERIMENT_ID
          );
          if (variant === 0 || variant === undefined) {
            setVariant(0);
            //
            document.querySelector("input[name='CampaignData1__c']").value =
              "Version A";
          } else {
            setVariant(1);
            //
            document.querySelector("input[name='CampaignData1__c']").value =
              "Version B";
          }
          clearInterval(intervalId);
        }
      }, 500);
    }

    checkVariant();
  }, []);

  useEffect( async () => {
    // Close panel layer
    if(submitted){
      // await togglePanel(false)
      setSubmittedForm(true)
    }
  }, [submitted]);

  return <Landing/>
};

const mapStateToProps = ({ theme }) => {
  return {
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
    activeABTesting: (bol) => {
      dispatch({ type: themeActions.ACTIVE_AB_TESTING, bol });
    },
    setVariant: (value) => {
      dispatch({ type: themeActions.SET_VARIANT, value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
