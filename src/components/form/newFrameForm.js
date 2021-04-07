import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { Form, withFormik } from "formik";
import "rsuite/lib/styles/index.less";
import ProgressBar from "components/progress";
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
  Divider,
  Checkbox
} from "@chakra-ui/react";

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    formContent = content,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    setHiddenForm,
    submitted
  } = props;

  const [hiddenFormValues, setHiddenFormValues] = useState([]);
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);

  const mobileCountryCode = [{ label: "+852", value: "852" },{ label: "+853", value: "853" },]
  const progress = [{ bgcolor: "#66cc00", completed: numResponses, target: numSignupTarget },];
  const [birthDateYear, setBirthDateYear] = useState([]);
  const space = 8

  useEffect(() => {
    const getHiddenFields = document.querySelectorAll('input[value][type="hidden"]:not([value=""])');
    const signupTarget = document.querySelector("input[name='numSignupTarget']");
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
    setHiddenForm(hiddenFormValues)
  }, [hiddenFormValues]);

  useEffect(() => {
    if(submitted){
      setSubmitting(false)
    }
  }, [submitted]);

  return (
    <>
    <Form onSubmit={handleSubmit}>
    <Heading pb={3} size="xl">{formContent.form_header}</Heading>
    <Text pb={3}>{formContent.form_description}</Text>
    {progress.map((item, idx) => (
      <ProgressBar
        key={idx}
        bgcolor={item.bgcolor}
        completed={item.completed}
        target={item.target}
      />
    ))}
    <Divider />

    <Flex direction="column">
        <Box flex="1" pb={space}>
          <FormControl id="email" isInvalid={errors.Email && touched.Email}>
            <FormLabel fontSize="sm">{formContent.label_email}</FormLabel>
            <Input
              name="Email"
              type="email"
              placeholder={errors.Email && touched.Email ? errors.Email : formContent.label_email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormControl>
        </Box>

        <HStack>
          <Box pb={3} flex={1} pb={space}>
            <FormControl id="lastName" isInvalid={errors.LastName && touched.LastName}>
              <FormLabel fontSize="sm">{formContent.label_last_name}</FormLabel>
              <Input
                name="LastName"
                type="text"
                placeholder={errors.LastName && touched.LastName ? errors.LastName : formContent.label_last_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
          <Box flex="1" pb={space}>
            <FormControl id="firstName" isInvalid={errors.FirstName && touched.FirstName}>
              <FormLabel fontSize="sm">{formContent.label_first_name}</FormLabel>
              <Input
                name="FirstName"
                type="text"
                placeholder={errors.FirstName && touched.FirstName ? errors.FirstName : formContent.label_first_name}
                onChange={handleChange}
              />
            </FormControl>
          </Box>
        </HStack>

        <FormLabel fontSize="sm">{formContent.label_phone}</FormLabel>

        <HStack align="flex-end">
          <Box pb={space}>
            <FormControl id="mobileCountryCode">
              <Select name="MobileCountryCode" onChange={handleChange}>
              {mobileCountryCode &&
                mobileCountryCode.map((d) => (
                    <option key={d.value} value={d.value}>
                      {d.label}
                    </option>
                  ))}
              </Select>
            </FormControl>
          </Box>
          <Box flex="1" pb={space}>
            <FormControl id="mobilePhone" isInvalid={errors.MobilePhone && touched.MobilePhone}>
              <Input
                type="number"
                name="MobilePhone"
                placeholder={errors.MobilePhone && touched.MobilePhone ? errors.MobilePhone : formContent.label_phone}
                onChange={handleChange}
              />
              {/* <FormErrorMessage>{errors.mobilePhone}</FormErrorMessage> */}
            </FormControl>
          </Box>
        </HStack>

        <Box flex="1" pb={space}>
          <FormControl id="Birthdate" isInvalid={errors.Birthdate && touched.Birthdate}>
            <FormLabel fontSize="sm">{formContent.label_year_of_birth}</FormLabel>
            <Select placeholder={errors.Birthdate && touched.Birthdate ? errors.Birthdate : formContent.select} onChange={handleChange}>
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
            <FormControl id="optIn">
            <Checkbox name="OptIn" onChange={handleChange}>
              <Text fontSize="xs">{formContent.form_remind}</Text>
            </Checkbox>
            </FormControl>
          </Box>
        </HStack>
        </Box>
      </Flex>
    </Form>
    </>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({ Email: '', FirstName: '', LastName: '', MobileCountryCode: '852', MobilePhone: '', Birthdate: '', OptIn: false }),

  validate: values => {
    const errors = {};
 
   if (!values.Email) {
     errors.Email = content.empty_data_alert;
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
     errors.Email = content.invalid_email_alert;
   }

  if (!values.FirstName) {
    errors.FirstName = content.empty_data_alert;
  }

  if (!values.LastName) {
    errors.LastName = content.empty_data_alert;
  }

  if (!values.MobilePhone) {
    errors.MobilePhone = content.empty_data_alert;
  }  else if (values.MobilePhone.toString().length !== 8) {
    errors.MobilePhone = content.minimum_8_characters;
  }

  if (!values.Birthdate) {
    errors.Birthdate = content.empty_data_alert;
  }

   return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    const {hiddenFormValue} = props.theme
    const submitData = {
      ...hiddenFormValue,
      ...values,
      Birthdate: `${values.Birthdate}-01-01`
    }
    props.submitForm(submitData);
    // setTimeout(() => {
    //   props.submitForm(submitData);
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 1000);
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
