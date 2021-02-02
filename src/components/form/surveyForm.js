import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Schema } from "rsuite";
import { animateScroll as scroll, scroller } from "react-scroll";
import {
  FlexboxGrid,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  SelectPicker,
  Checkbox,
  CheckboxGroup,
  Radio,
  RadioGroup,
} from "rsuite";
import { Grid, Row, Col } from "rsuite";
import content from "./content.json";
import survey from "./survey.json";

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

let SurveyForm = ({ submitForm, submitted, formContent = content }) => {
  const refForm = useRef();
  const [formDefaultValue, setFormDefaultValue] = useState();
  const { StringType, ArrayType } = Schema.Types;
  const model = Schema.Model({
    q1: ArrayType()
      .maxLength(2, "最多兩項選擇")
      .isRequired(formContent.empty_select_data_alert),
    q2: ArrayType()
      .maxLength(2, "最多兩項選擇")
      .isRequired(formContent.empty_select_data_alert),
    q3: StringType().isRequired(formContent.empty_select_data_alert),
    q4: StringType().isRequired(formContent.empty_data_alert),
    q5: StringType().isRequired(formContent.empty_select_data_alert),
    email: StringType()
      .isEmail(formContent.invalid_email_alert)
      .isRequired(formContent.empty_data_alert),
    lastName: StringType().isRequired(formContent.empty_data_alert),
    firstName: StringType().isRequired(formContent.empty_data_alert),
  });

  const handleSubmit = (isValid) => {
    const { formValue, formError } = refForm.current.state;
    if (isValid) {
      console.log("formValue--", formValue);
      // submitForm(formValue);
    } else {
      console.log("formValue--", formError);
      scrollTo();
    }
  };

  const scrollTo = () => {
    scroller.scrollTo("form", {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -200,
    });
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
        <Form
          name="form"
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
                    {survey.q1.map((d) => (
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
                    {survey.q2.map((d) => (
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
                  <CustomField name="q3" accepter={RadioGroup} inline>
                    {survey.q3.map((d) => (
                      <Radio key={d.label} value={d.value}>
                        {d.label}
                      </Radio>
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
                          style={{ height: "150px" }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </div>

                <div className="section-title">
                  <h2>Q5: 您的年齡是？</h2>
                  <CustomField name="q5" accepter={RadioGroup} inline>
                    {survey.q5.map((d) => (
                      <Radio key={d.label} value={d.value}>
                        {d.label}
                      </Radio>
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

            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={10}>
                <button
                  type="submit"
                  className="custom-button custom-button-active"
                >
                  {formContent.submit_text}
                </button>
              </FlexboxGrid.Item>
            </FlexboxGrid>
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
    setForm: (value) => {
      dispatch({ type: themeActions.SET_FORM_VALUE, value });
    },
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SurveyForm);
