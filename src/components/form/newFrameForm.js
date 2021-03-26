import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Formik, Field, Form, withFormik } from "formik";
import "rsuite/lib/styles/index.less";
import ProgressBar from "components/progress";
import SubmittedForm from "./submittedForm";

import content from "./newFormContent.json";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Box,
  Flex,
  Center,
  Square,
  Text,
  Select,
  Container,
  Heading,
  HStack,
  Spacer,
  Checkbox
} from "@chakra-ui/react";

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    formContent = content,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;

  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);
  const [mobileCountryCode, setMobileCountryCode] = useState([
    { label: "+852", value: "852" },
    { label: "+853", value: "853" },
  ]);

  const [birthDateYear, setBirthDateYear] = useState([]);

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

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Heading pb={3} size="xl">{formContent.form_header}</Heading>
    <Text pb={3}>{formContent.form_description}</Text>

    <Flex direction="column">
        <Box flex="1" pb="3">
          <FormControl id="email" isInvalid={errors.email && touched.email}>
            <FormLabel fontSize="sm">{formContent.label_email}</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder={errors.email && touched.email ? errors.email : formContent.label_email}
              onChange={handleChange}
            />
          </FormControl>
        </Box>

        <HStack>
          <Box pb={3}>
            <FormControl id="lastName" isInvalid={errors.lastName && touched.lastName}>
              <FormLabel fontSize="sm">{formContent.label_last_name}</FormLabel>
              <Input
                name="lastName"
                type="text"
                placeholder={errors.lastName && touched.lastName ? errors.lastName : formContent.label_last_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box flex="1" pb={3}>
            <FormControl id="firstName" isInvalid={errors.firstName && touched.firstName}>
              <FormLabel fontSize="sm">{formContent.label_first_name}</FormLabel>
              <Input
                name="firstName"
                type="text"
                placeholder={errors.firstName && touched.firstName ? errors.firstName : formContent.label_first_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
        </HStack>

        <FormLabel fontSize="sm">{formContent.label_phone}</FormLabel>

        <HStack align="flex-end">
          <Box pb={3}>
            <FormControl id="mobileCountryCode" name="mobileCountryCode">
              <Select onChange={handleChange}>
              {mobileCountryCode &&
                mobileCountryCode.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.value}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box flex="1" pb={3}>
            <FormControl id="mobilePhone" isInvalid={errors.mobilePhone && touched.mobilePhone}>
              <Input
                type="number"
                name="mobilePhone"
                placeholder={errors.mobilePhone && touched.mobilePhone ? errors.mobilePhone : formContent.label_phone}
                onChange={handleChange}
              />
              {/* <FormErrorMessage>{errors.mobilePhone}</FormErrorMessage> */}
            </FormControl>
          </Box>
        </HStack>

        <Box flex="1" pb="3">
          <FormControl id="birthdate" isInvalid={errors.birthdate && touched.birthdate}>
            <FormLabel fontSize="sm">{formContent.label_year_of_birth}</FormLabel>
            <Select placeholder={errors.birthdate && touched.birthdate ? errors.birthdate : formContent.select} onChange={handleChange}>
              {birthDateYear &&
                birthDateYear.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.value}
                  </option>
                ))}
            </Select>
          </FormControl>
        </Box>

        <Box flex="1" pb={3} pt={3}>
          <Button
            w="100%"
            isLoading={isSubmitting}
            type="submit"
            colorScheme="teal"
            height="60px"
            borderRadius="0"
            size="lg"
            variant="outline"
          >
            立即聯署
          </Button>
        </Box>

        <Box>
        <HStack align="flex-start">
          <Box pb={3}>
            <FormControl id="mobileCountryCode" name="mobileCountryCode">
            <Checkbox defaultIsChecked>
            <Text fontSize="xs">{formContent.form_remind}</Text>
            </Checkbox>
            </FormControl>
          </Box>
        </HStack>
        </Box>
      </Flex>
      {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
    </Form>
    </>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: '', firstName: '', lastName: '', mobileCountryCode: '', mobilePhone: '', birthdate: '' }),

  // Custom sync validation
  validate: values => {
    const errors = {};
 
   if (!values.email) {
     errors.email = content.empty_data_alert;
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = content.invalid_email_alert;
   }

  if (!values.firstName) {
    errors.firstName = content.empty_data_alert;
  }

  if (!values.lastName) {
    errors.lastName = content.empty_data_alert;
  }

  if (!values.mobilePhone) {
    errors.mobilePhone = content.empty_data_alert;
  }  else if (values.mobilePhone.length !== 8) {
    errors.mobilePhone = content.minimum_8_characters;
  }

  if (!values.birthdate) {
    errors.birthdate = content.empty_data_alert;
  }

   return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'BasicForm',
})(MyForm);

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

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
