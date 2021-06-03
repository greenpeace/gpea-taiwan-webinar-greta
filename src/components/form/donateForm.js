import React, { useEffect, useState } from "react";
import whatsapp from "assets/images/social/whatsapp_icon.svg";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";
import { mainShare, whatsAppShare } from "../../share";
import content from "./newFormContent.json";
import { Button, Flex, Heading, Text, Stack, Box, SimpleGrid, Grid, GridItem } from "@chakra-ui/react";

const buttonStyle = {
  h: "50px",
  fontWeight: 500
};

const TYPES = [{label: '每月捐款', value: 'monthly'}, {label: '單次捐款', value: 'onetime'}]
const AMOUNT_ONETIME = [{label: 'HKD 1,000', value: 1000}, {label: 'HKD 2,000', value: 2000}, {label: 'HKD 3,000', value: 3000}, {label: '其他 Amount', value: 'other'}]
const AMOUNT_MONTHLY = [{label: 'HKD 200', value: 200}, {label: 'HKD 400', value: 400}, {label: 'HKD 600', value: 600}, {label: '其他 Amount', value: 'other'}]

const DonateForm = () => {

  const [donateType, setDonateType] = useState('monthly');
  const [amount, setAmount] = useState(200);
  const [url, setURL] = useState({type: donateType, amount: amount})
  const amountOption = donateType === 'monthly' ?  AMOUNT_MONTHLY : AMOUNT_ONETIME


  const handleSetDonateType = (value) => {
    setDonateType(value)
    setAmount(value === 'monthly' ? AMOUNT_MONTHLY[0].value : AMOUNT_ONETIME[0].value)
    setURL({...url, type: value})
  }

  const handleOpenLink = (value) => {
    window.open(`https://www.greenpeace.org/hongkong?type=${donateType}&amount=${amount}`);
  }

  return (
    <Box>
      <Box>
        <Text py={2} align={'center'} variant="heading">
          守護地球，分秒必爭
        </Text>
        <Text as="p" align={'center'} variant="description" color="gray.700">
          <span dangerouslySetInnerHTML={{ __html: "綠色和飄實地研究和見證環境問題，請幫助我們繼續保護珍貴的自然環境" }}/>
        </Text>
      </Box>
      <Box py={4}>
        <Stack direction="row" spacing={1} borderWidth={1} borderColor="brand.500" borderRadius={'md'} overflow={'hidden'}>
          {TYPES.map((d,i)=><Button
            key={d.value}
            flex="1"
            h="50px"
            borderRadius={0}
            bg={donateType===d.value ? "brand.500" : "#FFF"}
            color={donateType===d.value ? "#FFF" : "brand.500"}
            _hover={{ bg: "brand.500", color: "#FFF" }}
            onClick={()=>handleSetDonateType(d.value)}
            >
            {d.label}
          </Button>)}
        </Stack>
      </Box>
    <Box
        border="1px solid #f1f1f1"
        boxShadow={"xl"}
        py={4}
        px={6}
        rounded="md"
        bg="white"
        overflow="hidden"
      >

    <Flex direction="column">
      <Box py={4}>
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          {amountOption.map((d,i)=>{

            const colSpan = amountOption.length === i+1 ? 3 : 1

            return(
              <GridItem colSpan={colSpan} key={i}>
              <Button
                key={d.value}
                flex="1"
                bg={amount===d.value ? "brand.500" : "gray.300"}
                color={amount===d.value ? "#FFF" : "gray.500"}
                borderRadius={'md'}
                _hover={{ bg: "brand.500", color: "#FFF" }}
                onClick={()=>setAmount(d.value)}
                w="100%"
                {...buttonStyle}
                >
                {d.label}
              </Button>
              </GridItem>
            )
          })}
        </Grid>
      </Box>

      <Box align="center" py={6}>
        <Text color="gray.700">您的每月捐款，將幫助綠色和平為環境問題找到出路，並在全球各地落實環保工作。謝謝！</Text>
      </Box>

      <Box onClick={()=> handleOpenLink()}>
        <Button variant="formSubmitButton" {...buttonStyle} fontWeight={700}>立即捐款</Button>
      </Box>

      <Text align="center" pt={4} pb={2} color="gray.500" fontSize={'xs'}>Secure Payment Powered by Worldpay</Text>
    </Flex>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(DonateForm);
