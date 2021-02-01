import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Schema } from "rsuite";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  SelectPicker,
  Checkbox,
  CheckboxGroup,
} from "rsuite";
import { Grid, Row, Col } from "rsuite";
import ProgressBar from "apps/petition/components/progress";
import SubmittedForm from "./submittedForm";
import content from "./content.json";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

let SurveyForm = ({
  togglePanel,
  toggleTheme,
  submitForm,
  submitted,
  formContent = content,
}) => {
  const refForm = useRef();
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);
  const [q1, setQ1] = useState([
    { label: "氣候變化", value: "氣候變化" },
    { label: "塑膠污染", value: "塑膠污染" },
    { label: "香港生態", value: "香港生態" },
    { label: "北極環境", value: "北極環境" },
    { label: "海洋保育", value: "海洋保育" },
    { label: "森林破壞", value: "森林破壞" },
  ]);
  const [q2, setQ2] = useState([
    { label: "守護生物多樣性（郊野生態)", value: "守護生物多樣性（郊野生態)" },
    { label: "素食推廣", value: "素食推廣" },
    { label: "超市減塑", value: "超市減塑" },
    { label: "社區減塑", value: "社區減塑" },
    { label: "氣候災難預防及應對", value: "氣候災難預防及應對" },
    { label: "阻止填海", value: "阻止填海" },
  ]);
  const [q3, setQ3] = useState([
    { label: "知道", value: "知道" },
    { label: "不知道", value: "不知道" },
  ]);
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState([
    { label: "20以下", value: "20以下" },
    { label: "21-29", value: "21-29" },
    { label: "30-39", value: "30-39" },
    { label: "40-49", value: "40-49" },
    { label: "50-59", value: "50-59" },
    { label: "60＋", value: "60＋" },
  ]);
  const [formDefaultValue, setFormDefaultValue] = useState();
  const { StringType, NumberType } = Schema.Types;
  const progress = [
    { bgcolor: "#66cc00", completed: numResponses, target: numSignupTarget },
  ];
  const model = Schema.Model({
    email: StringType()
      .isEmail(formContent.invalid_email_alert)
      .isRequired(formContent.empty_data_alert),
    lastName: StringType().isRequired(formContent.empty_data_alert),
    firstName: StringType().isRequired(formContent.empty_data_alert),
  });

  const closeAll = () => {
    togglePanel(false);
    toggleTheme(false);
  };

  const handleSubmit = (isValid) => {
    // const OptIn = refCheckbox.current.state?.checked;
    const { formValue } = refForm.current.state;
    console.log("formValue--", formValue);
    if (isValid) {
      const { formValue } = refForm.current.state;
      console.log("formValue--", formValue);
      // submitForm(formValue);
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
    <>
      <FadeInSection>
        <Grid fluid>
          <Row className="show-grid hidden">
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
        </Grid>
        <Form
          model={model}
          ref={refForm}
          onSubmit={(d) => handleSubmit(d)}
          checkDelay={800}
          formDefaultValue={formDefaultValue}
        >
          <Grid fluid>
            <Row className="show-grid">
              <Col xs={24}>
                <div className="section-title">
                  <h2>Q1: 您認為以下哪些環保議題最重要 (最多選擇兩項)</h2>
                  <CustomField name="q1" accepter={CheckboxGroup} inline>
                    {q1.map((d) => (
                      <Checkbox key={d.label} value={d.value}>
                        {d.label}
                      </Checkbox>
                    ))}
                  </CustomField>
                </div>
                <div className="section-title">
                  <h2>
                    Q2:
                    您認為以下哪些項目最適合於香港推動，幫助環境（最多選擇兩項）
                  </h2>
                  <CustomField name="q2" accepter={CheckboxGroup} inline>
                    {q2.map((d) => (
                      <Checkbox key={d.label} value={d.value}>
                        {d.label}
                      </Checkbox>
                    ))}
                  </CustomField>
                </div>

                <div className="section-title">
                  <h2>
                    Q3:
                    您知道綠色和平不接受政府、企業資助，100%倚賴市民支持得以創造環保成就嗎？
                  </h2>
                  <CustomField name="q3" accepter={CheckboxGroup} inline>
                    {q3.map((d) => (
                      <Checkbox key={d.label} value={d.value}>
                        {d.label}
                      </Checkbox>
                    ))}
                  </CustomField>
                </div>

                <div className="section-title">
                  <h2>Q4: 面對 2021年，您還想告訴我們甚麼？</h2>
                  <Row className="show-grid">
                    <Col xs={24}>
                      <FormGroup>
                        <TextField
                          componentClass="textarea"
                          name="q4"
                          autoComplete="off"
                          style={{height: '150px'}}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="section-title">
                  <h2>Q5: 您的年齡是？</h2>
                  <CustomField name="q5" accepter={CheckboxGroup} inline>
                    {q5.map((d) => (
                      <Checkbox key={d.label} value={d.value}>
                        {d.label}
                      </Checkbox>
                    ))}
                  </CustomField>
                </div>

                <div className="section-title">
                  <h2>其他資料</h2>

                  <Row className="show-grid">
                    <Col xs={24} sm={8}>
                      <FormGroup>
                        <TextField
                          name="email"
                          placeholder={formContent.label_email}
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={8}>
                      <FormGroup>
                        <TextField
                          name="lastName"
                          placeholder={formContent.label_last_name}
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                    <Col xs={12} sm={8}>
                      <FormGroup>
                        <TextField
                          name="firstName"
                          placeholder={formContent.label_first_name}
                          autoComplete="off"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={24}>
                <button
                  type="submit"
                  className="custom-button custom-button-active"
                >
                  {formContent.submit_text}
                </button>
              </Col>
            </Row>
          </Grid>
        </Form>
      </FadeInSection>
    </>
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
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
