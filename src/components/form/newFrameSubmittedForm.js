import React, { useEffect, useState } from "react";
import whatsapp from "assets/images/social/whatsapp_icon.svg";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { mainShare, whatsAppShare } from "../../share";
import content from "./newFormContent.json";
import { Button, Flex, Heading, Text, Box } from "@chakra-ui/react";
import DonateForm from "./donateForm"

const MyForm = ({ formContent = content }) => {
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  useEffect(() => {
    const signupTarget = document.querySelector(
      "input[name='numSignupTarget']"
    );
    const numResponses = document.querySelector("input[name='numResponses']");

    if (signupTarget) {
      setNumSignupTarget(signupTarget.value);
    }
    if (numResponses) {
      setNumResponses(numResponses.value);
    }
  }, []);

  return (
    <Box
      borderTop={{base: null, sm: "4px solid #66cc00"}}
      boxShadow={{base: null, sm: "lg"}}
      px={{base:0, sm: 6}}
      py={2}
      rounded={{base: 0, sm: "md"}}
      bg="white"
      overflow="hidden"
    >
    <Flex direction="column">
      <Text py={4} variant="heading" py={2}>
        <span dangerouslySetInnerHTML={{ __html: formContent.thanks_title }}/>
      </Text>
      <Text as="p" variant="description" py={2}>
        <span dangerouslySetInnerHTML={{ __html: formContent.thanks_content_top_section }}/>
      </Text>
      <Text as="p" variant="description" py={2}>
        <span dangerouslySetInnerHTML={{ __html: formContent.thanks_content_center_section }}/>
      </Text>
      <Button
        variant="donateButton"
        style={{ backgroundColor: "#3b5998"}}
        onClick={() =>
          mainShare(
            formContent.shareMessage,
            formContent.fbURL,
            formContent.mainURL
          )
        }
        rel="noreferrer"
      >
        {formContent.share_button}
      </Button>
      <Button
        variant="donateButton"
        style={{ backgroundColor: "#25d366"}}
        onClick={() =>
          whatsAppShare(formContent.shareMessage, formContent.whatsappURL)
        }
        rel="noreferrer"
      >
        <img
          loading="lazy"
          src={whatsapp}
          alt="whatsapp"
          style={{ height: "24px" }}
        />
      </Button>
      <Text as="p" variant="description" py={1}>
        <span dangerouslySetInnerHTML={{ __html: formContent.thanks_content_bottom_section }}/>
      </Text>
      <Button
        variant="donateButton"
        style={{ backgroundColor: "#fda22f" }}
        onClick={() => window.open(formContent.donateURL)}
        target="_blank"
        rel="noreferrer"
      >
        {formContent.donate_button}
      </Button>

      {/* <DonateForm/> */}

    </Flex>
    </Box>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTheme: (bol) => {
      dispatch({ type: themeActions.TOGGLE_FORM, bol });
    },
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
    setForm: (value) => {
      dispatch({ type: themeActions.SET_FORM_VALUE, value });
    },
    setHiddenForm: (value) => {
      dispatch({ type: themeActions.SET_HIDDEN_FORM_VALUE, value });
    },
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyForm);
