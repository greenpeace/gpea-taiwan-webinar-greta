import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from 'react-responsive'
import ProgressBar from "components/progress";
import {
  Box,
  Image,
  Flex,
  Button,
  Container,
  Spacer
} from "@chakra-ui/react";
import * as themeActions from "store/actions/action-types/theme-actions";
import Sticky from 'react-sticky-el';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Tab = () => {
  const isMobile = useMediaQuery({query: '(max-device-width: 564px)'})
  const [numSignupTarget, setNumSignupTarget] = useState(100000);
  const [numResponses, setNumResponses] = useState(0);
  const progress = [{ bgcolor: "#62cbd7", completed: numResponses, target: numSignupTarget },];
  useEffect(() => {
    const signupTarget = document.querySelector("input[name='numSignupTarget']");
    const numResponses = document.querySelector("input[name='numResponses']");

    if (signupTarget) {
      setNumSignupTarget(signupTarget.value);
    }
    if (numResponses) {
      setNumResponses(numResponses.value);
    }
  }, []);

  const textStyle = {
    fontSize: {base: 'md', sm: '18px'}, 
    color: "rgba(0,0,0,.65)", 
    lineHeight: 1.8
  }

  const [currentTab, setCurrentTab] = useState(0);

  return (<>
    {!isMobile && <Sticky stickyStyle={{zIndex: 10}}>
      <Box className="sticky-box" mb={{base: 0}} pt={{base: 0}} pb={{base: 0}} borderTop="1px" borderBottom="1px" borderColor="gray.100" backgroundColor='rgba(255,255,255,0.8)'>
      <Container maxW={'8xl'}>
      <Flex>
        {/* <Box p={5}>
          <Image maxW="200px" objectFit="contain" src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"/>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(0)}>
          <Button colorScheme="teal" variant="link">內容</Button>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(1)}>
        <Button colorScheme="teal" variant="link">常見問題</Button>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(2)}>
          <Button colorScheme="teal" variant="link">其他資料</Button>
        </Box> */}
        <Spacer />
        <Box px={3} pt={4} w="360px" borderRightWidth="1px" borderRightColor="#f2f2f2">
        {progress.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            target={item.target}
          />
        ))}
        </Box>
        <Box p={3} w="360px">
        <Link activeClass="active" style={{textDecoration: 'none'}} to="test1" spy={true} smooth={true} offset={50} duration={500}>
        <Button
            w="100%"
            height="60px"
            borderRadius="0"
            size="lg"
            color="#FFF"
            bg="campaign.arctic"
            _hover={{ bg: "campaign.oceans" }}
          >
            立即聯署
          </Button>
          </Link>
        </Box>
      </Flex>
      </Container>
      </Box>
      </Sticky>}
    </>
  );
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
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Tab);
