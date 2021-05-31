import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import mailcheck from "mailcheck";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  SelectPicker,
  Checkbox,
  Grid,
  Row,
  Col,
  Schema,
} from "rsuite";
import "rsuite/lib/styles/index.less";
import ProgressBar from "components/progress";
import SubmittedForm from "./submittedForm";

import content from "./content.json";

// for email correctness
let domains = [
  "me.com",
  "outlook.com",
  "netvigator.com",
  "cloud.com",
  "live.hk",
  "msn.com",
  "gmail.com",
  "hotmail.com",
  "ymail.com",
  "yahoo.com",
  "yahoo.com.tw",
  "yahoo.com.hk",
];
let topLevelDomains = ["com", "net", "org"];

let RegistrationForm = ({
  togglePanel,
  toggleTheme,
  submitForm,
  submitted,
  formContent = content,
  activeABTesting,
  variant,
}) => {
  const refForm = useRef();
  const refCheckbox = useRef();
  const refMobileCountryCode = useRef();
  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [emailSuggestion, setEmailSuggestion] = useState("內容");
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);
  const [mobileCountryCode, setMobileCountryCode] = useState([
    { label: "+852", value: "852" },
    { label: "+853", value: "853" },
  ]);
  const [formDefaultValue, setFormDefaultValue] = useState({
    MobileCountryCode: "852",
  });
  const [birthDateYear, setBirthDateYear] = useState([]);
  const { StringType, NumberType } = Schema.Types;
  const progress = [
    { bgcolor: "#66cc00", completed: numResponses, target: numSignupTarget },
  ];

  const modelVersionA = Schema.Model({
    Email: StringType()
      .isEmail(formContent.invalid_email_alert)
      .isRequired(formContent.empty_data_alert),
    LastName: StringType().isRequired(formContent.empty_data_alert),
    FirstName: StringType().isRequired(formContent.empty_data_alert),
    MobileCountryCode: StringType().isRequired(formContent.empty_data_alert),
    MobilePhone: NumberType()
      .isInteger(formContent.invalid_format_alert)
      .isRequired(formContent.empty_data_alert)
      .addRule((value) => {
        return value.toString().length === 8;
      }, formContent.minimum_8_characters)
      .addRule((value) => {
        let regex;
        const { MobileCountryCode } = refForm.current.state.formValue;
        if (!MobileCountryCode || MobileCountryCode === "852") {
          regex = /^[2,3,5,6,8,9]{1}[0-9]{7}$/i;
        } else if (MobileCountryCode === "853") {
          regex = /^[6]{1}[0-9]{7}$/i;
        }
        return regex.test(value);
      }, formContent.invalid_format_alert),
    Birthdate: StringType().isRequired(formContent.empty_data_alert),
  });

  const modelVersionB = Schema.Model({
    Email: StringType()
      .isEmail(formContent.invalid_email_alert)
      .isRequired(formContent.empty_data_alert),
    LastName: StringType().isRequired(formContent.empty_data_alert),
    FirstName: StringType().isRequired(formContent.empty_data_alert),
  });

  const setModel = activeABTesting
    ? variant == 0
      ? modelVersionA
      : modelVersionB
    : modelVersionA;

  const closeAll = () => {
    togglePanel(false);
    toggleTheme(false);
  };

  const handleSubmit = (isValid) => {
    const OptIn = refCheckbox.current.state?.checked;

    if (isValid) {
      const { formValue } = refForm.current.state;
      let birthdateValue = formValue.Birthdate
        ? `${formValue.Birthdate}-01-01`
        : "";
      submitForm({
        ...hiddenFormValues,
        ...formValue,
        OptIn,
        Birthdate: birthdateValue,
      });
      // Check submit value
      /*
      console.log("Submitting", {
        ...hiddenFormValues,
        ...formValue,
        OptIn,
        Birthdate: `${formValue.Birthdate}-01-01`,
      });
      */
    }
  };

  const TextField = (props) => {
    const {
      name,
      label,
      placeholder,
      accepter,
      handleOnChange,
      ...rest
    } = props;
    return (
      <FormGroup>
        {label && <ControlLabel>{label} </ControlLabel>}
        <FormControl
          name={name}
          accepter={accepter}
          placeholder={placeholder}
          {...rest}
          checkTrigger={"blur"}
        />
      </FormGroup>
    );
  };

  useEffect(() => {
    let getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );
    setHiddenFormValues(
      [...getHiddenFields].reduce(
        (obj, e) => ({ ...obj, [e.name]: e.value }),
        {}
      )
    );

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
    //
    let optionYear = [];
    async function fetchOptionYear() {
      let nowYear = new Date().getFullYear();
      let targetYear = nowYear - 110;
      for (var i = nowYear - 20; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() });
      }
      setBirthDateYear(optionYear);
    }
    fetchOptionYear(optionYear);
  }, []);
  class CustomField extends React.PureComponent {
    render() {
      const { name, message, label, accepter, error, ...props } = this.props;
      return (
        <FormGroup className={error ? "has-error" : ""}>
          <FormControl
            name={name}
            accepter={accepter}
            errorMessage={error}
            {...props}
          />
        </FormGroup>
      );
    }
  }

  return (
    <div className="custom-gp-form">
      <div className="form-close" onClick={() => closeAll()}>
        <FontAwesomeIcon
          icon={["fas", "times-circle"]}
          size="lg"
          color="lime"
        />
      </div>
      {submitted ? (
        <SubmittedForm formContent={formContent} />
      ) : (
        <>
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={24}>
                {formContent.form_header && (
                  <div className="form-header">
                    <h2>{formContent.form_header}</h2>
                  </div>
                )}
                {formContent.form_description && (
                  <div className="form-description">
                    <p>{formContent.form_description}</p>
                  </div>
                )}
              </Col>
            </Row>
            {/*
            <Row className="show-grid">
              <Col xs={24}>
                {progress.map((item, idx) => (
                  <ProgressBar
                    key={idx}
                    bgcolor={item.bgcolor}
                    completed={item.completed}
                    target={item.target}
                  />
                ))}
                <div className="sp-line"></div>
              </Col>
            </Row>
                */}
          </Grid>
          <Form
            model={setModel}
            ref={refForm}
            onSubmit={(d) => handleSubmit(d)}
            checkDelay={800}
            formDefaultValue={formDefaultValue}
          >
            <Grid fluid>
              <Row className="show-grid">
                <Col xs={24}>
                  <FormGroup>
                    <TextField
                      name="Email"
                      placeholder={formContent.label_email}
                      label={formContent.label_email}
                      autoComplete="off"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={12}>
                  <FormGroup>
                    <TextField
                      name="LastName"
                      placeholder={formContent.label_last_name}
                      label={formContent.label_last_name}
                      autoComplete="off"
                    />
                  </FormGroup>
                </Col>
                <Col xs={12}>
                  <FormGroup>
                    <TextField
                      name="FirstName"
                      placeholder={formContent.label_first_name}
                      label={formContent.label_first_name}
                      autoComplete="off"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={24}>
                  <FormGroup>
                    <ControlLabel>
                      {activeABTesting && variant == 0
                        ? formContent.label_phone
                        : formContent.label_phone_optional}
                    </ControlLabel>
                    <Col xs={6} style={{ paddingLeft: 0 }}>
                      <CustomField
                        name="MobileCountryCode"
                        searchable={false}
                        cleanable={false}
                        placeholder={formContent.select}
                        accepter={SelectPicker}
                        data={mobileCountryCode}
                        ref={refMobileCountryCode}
                      />
                    </Col>
                    <Col xs={18} style={{ paddingRight: 0 }}>
                      <FormGroup>
                        <TextField
                          type="number"
                          placeholder={
                            activeABTesting && variant == 0
                              ? formContent.label_phone
                              : formContent.label_phone_optional
                          }
                          name="MobilePhone"
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={24}>
                  <FormGroup>
                    <ControlLabel>
                      {activeABTesting && variant == 0
                        ? formContent.label_year_of_birth
                        : formContent.label_year_of_birth_optional}
                    </ControlLabel>
                    <CustomField
                      name="Birthdate"
                      searchable={false}
                      cleanable={false}
                      placeholder={formContent.select}
                      accepter={SelectPicker}
                      data={birthDateYear}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={24}>
                  <div className="custom-form-reminder">
                    <Checkbox name="OptIn" ref={refCheckbox} defaultChecked>
                      {formContent.form_remind}
                    </Checkbox>
                  </div>
                </Col>
              </Row>

              <Row className="show-grid">
                <Col xs={24}>
                  <button
                    type="submit"
                    className="custom-button custom-button-active"
                  >
                    {formContent.submit_text}{" "}
                    <FontAwesomeIcon icon={["fas", "pen"]} />
                  </button>
                </Col>
              </Row>
            </Grid>
          </Form>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
    activeABTesting: theme.abTesting,
    variant: theme.variant,
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
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
