import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Form, withFormik } from "formik";
import "rsuite/lib/styles/index.less";
import ProgressBar from "components/progress";

import Mailcheck from "mailcheck";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Flex,
  Text,
  Select,
  Heading,
  HStack,
  Checkbox,
} from "@chakra-ui/react";

// For email correctness
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

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    formContent,
    handleSubmit,
    showProgress,
    newsLetter,
    isSubmitting,
    setSubmitting,
    setHiddenForm,
    submitted,
    birthDate = true,
    activeABTesting,
    variant,
    togglePanel,
  } = props;

  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  const mobileCountryCode = [
    { label: "+886", value: "886" },
  ];
  const progress = [
    { bgcolor: "#62cbd7", completed: numResponses, target: numSignupTarget },
  ];
  const [birthDateYear, setBirthDateYear] = useState([]);
  const space = 4;

  const labelStyle = {
    fontSize: "xs",
    color: "gray.400",
  };

  useEffect(() => {
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])'
    );
    const signupTarget = document.querySelector(
      "input[name='numSignupTarget']"
    );
    const numResponses = document.querySelector("input[name='numResponses']");

    setHiddenFormValues(
      [...getHiddenFields].reduce(
        (obj, e) => ({ ...obj, [e.name]: e.value }),
        {}
      )
    );

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

  useEffect(() => {
    setHiddenForm(hiddenFormValues);
  }, [hiddenFormValues]);

  useEffect(() => {
    if (submitted) {
      setSubmitting(false);
    }
  }, [submitted]);

  let isFull = false;
  useEffect(() => {
    // fetch the signup numbers
    fetch("https://cloud.greentw.greenpeace.org/campaign-member-counts")  
    .then(response => response.json())
    .then(response => {      
      let rows = response;
      rows.forEach(serverRow => {
        let campaignId = serverRow["Id"]
        
        // find that campaign        
        if (campaignId === "7012u000000P6LAAA0") {          
          let numRes = parseInt(serverRow["NumberOfResponses"], 10);
          let targetSignups = 300;          
          
          if (numRes >= targetSignups) {
            isFull = true;
          }
          
          return;
        }
      });

      if (isFull && document.querySelector('form')) {
        document.querySelector('form').remove();
        document.querySelector('#formBox').innerHTML= `<p style='font-size:30px; text-align:center;'>報名已額滿。</p>`;
      }
    });
  });

  return (
    <Box
      borderTop={{base: null, sm: "4px solid #66cc00"}}
      boxShadow={{base: null, sm: "lg"}}
      p={{base:0, sm: 6}}
      rounded={{base: 0, sm: "md"}}
      bg="white"
      overflow="hidden"
      id="formBox"
    >
      <Form onSubmit={handleSubmit}>
      <Text py={4} variant="heading" fontSize="2xl" color="gray.900" py={2}>
        <span dangerouslySetInnerHTML={{ __html: formContent.form_header }}/>
      </Text>
        {/* <Heading
          pt="4"
          mb="6"
          size="md"
          color="gray.900"
          dangerouslySetInnerHTML={{ __html: formContent.form_header }}
        ></Heading> */}
        {formContent.form_description && (
          <Text pb={4}>{formContent.form_description}</Text>
        )}
        {showProgress &&
          progress.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={item.completed}
              target={item.target}
            />
          ))}
        <Flex direction="column">
          <Box flex="1" pb={space}>
            <FormControl id="email" isInvalid={errors.Email && touched.Email}>
              <FormLabel {...labelStyle}>{formContent.label_email}</FormLabel>
              <Input
                name="Email"
                type="email"
                placeholder={formContent.label_email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <FormErrorMessage color="red">{errors.Email}</FormErrorMessage>
            </FormControl>
          </Box>

          <HStack>
            <Box flex={1} pb={space}>
              <FormControl
                id="lastName"
                isInvalid={errors.LastName && touched.LastName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_last_name}
                </FormLabel>
                <Input
                  name="LastName"
                  type="text"
                  placeholder={formContent.label_last_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">
                  {errors.LastName}
                </FormErrorMessage>
              </FormControl>
            </Box>
            <Box flex="1" pb={space}>
              <FormControl
                id="firstName"
                isInvalid={errors.FirstName && touched.FirstName}
              >
                <FormLabel {...labelStyle}>
                  {formContent.label_first_name}
                </FormLabel>
                <Input
                  name="FirstName"
                  type="text"
                  placeholder={formContent.label_first_name}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">
                  {errors.FirstName}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

          <FormControl>
            <FormLabel {...labelStyle}>
              {activeABTesting && variant == 0
                ? formContent.label_phone
                : formContent.label_phone_optional}
            </FormLabel>
          </FormControl>

          <HStack align="flex-end">            
            <Box flex="1" pb={space}>
              <FormControl
                id="mobilePhone"
                isInvalid={errors.MobilePhone && touched.MobilePhone}
              >
                <Input
                  type="number"
                  name="MobilePhone"
                  placeholder={formContent.label_phone}
                  onChange={handleChange}
                />
                <FormErrorMessage color="red">
                  {errors.MobilePhone}
                </FormErrorMessage>
              </FormControl>
            </Box>
          </HStack>

          {birthDate && (
            <Box flex="1" pb={space}>
              <FormControl
                id="Birthdate"
                isInvalid={errors.Birthdate && touched.Birthdate}
              >
                <FormLabel {...labelStyle}>
                  {activeABTesting && variant == 0
                    ? formContent.label_year_of_birth
                    : formContent.label_year_of_birth_optional}
                </FormLabel>
                <Select
                  placeholder={formContent.select}
                  onChange={handleChange}
                >
                  {birthDateYear &&
                    birthDateYear.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.value}
                      </option>
                    ))}
                </Select>
                <FormErrorMessage color="red">
                  {errors.Birthdate}
                </FormErrorMessage>
              </FormControl>
            </Box>
          )}

          <Box flex="1" pt={3} pb={3}>
            <Button
              w="100%"
              isLoading={isSubmitting}
              type="submit"
              height="48px"
              borderRadius="8"
              fontSize="xl"
              color="#FFF"
              letterSpacing={4}
              bg="#ff8100"
              _hover={{ bg: "campaign.climate" }}
              type="submit"
            >
              {formContent.submit_text}
            </Button>
          </Box>

          <Box>
            <HStack align="flex-start">
              <Box pt={5} pb={4}>
                <FormControl id="optIn">
                  {newsLetter ? (
                    <Checkbox name="OptIn" onChange={handleChange}>
                      <Text fontSize="xs">{formContent.form_remind}</Text>
                    </Checkbox>
                  ) : (
                    <Text fontSize="xs" color="gray.500">
                      <sup> * </sup>
                      {formContent.form_remind}
                    </Text>
                  )}
                </FormControl>
              </Box>
            </HStack>
          </Box>
        </Flex>
      </Form>
    </Box>
  );
  
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: "",
    FirstName: "",
    LastName: "",
    MobileCountryCode: "852",
    MobilePhone: "",
    Birthdate: "",
    OptIn: true,
  }),

  validate: (values, { formContent, variant, activeABTesting, birthDate }) => {
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert;
    }
    // else {
    //   TODO: NEED CONFIRM ERROR MSG
    //   Mailcheck.run({
    //     email: values.Email,
    //     domains: domains,
    //     topLevelDomains: topLevelDomains,
    //     suggested: function(suggestion) {
    //       if(values.Email !== suggestion.domain)
    //       errors.Email = `您是否想輸入${suggestion.full}`
    //     }
    //   })
    // }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert;
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert;
    }

    if (activeABTesting && variant == 0) {
      if (!values.MobilePhone) {
        errors.MobilePhone = formContent.empty_data_alert;
      } else if (values.MobilePhone.toString().length !== 8) {
        const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(values.MobilePhone);
			  const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(values.MobilePhone);
			  const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(values.MobilePhone);
        
        if (!phoneReg6 && !phoneReg7 && !phoneReg8)
          errors.MobilePhone = formContent.invalid_phone_alert;
      }      
      
      if (birthDate && !values.Birthdate) {
        errors.Birthdate = formContent.empty_data_alert;
      }
    }

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const { hiddenFormValue } = props.theme;
    let birthdateValue = values.Birthdate ? `${values.Birthdate}-01-01` : "";
    // issue: form submit with '-01-01' will cause submission error
    const submitData = {
      ...hiddenFormValue,
      ...values,
      Birthdate: birthdateValue,
      // Birthdate: `${values.Birthdate}-01-01`,
    };
    props.submitForm(submitData);
  },

  displayName: "BasicForm",
})(MyForm);

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
    setHiddenForm: (value) => {
      dispatch({ type: themeActions.SET_HIDDEN_FORM_VALUE, value });
    },
    submitForm: (form) => {
      dispatch({ type: themeActions.SUBMIT_FORM, form });
    },
  };
};

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
