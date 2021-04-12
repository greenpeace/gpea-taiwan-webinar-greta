import React from "react";
import { connect } from "react-redux";
import { useMediaQuery } from 'react-responsive'
import Sticky from 'react-sticky-el';
import content from './data/content'
import { ChakraProvider, Grid, GridItem, Box, Image, Flex, Center, Text, Heading, VStack, Button, useColorModeValue, Container, Spacer, Divider, SimpleGrid, Stack} from "@chakra-ui/react";
import SEO from "./seo";
import Nav from "./components/header/nav";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "./theme.js"
import ImageWithColumn from "./components/feature/imageWithColumn"

const Index = ({ submitted, togglePanel }) => {

  const isMobile = useMediaQuery({query: '(max-device-width: 564px)'})

  const pStyle = {
    as: "p",
    marginTop: 10,
    color: useColorModeValue('gray.700', 'gray.200'),
    fontSize: {base: 'md', sm: 'lg'},
    lineHeight: "32px"
  }

  const flexBoxStyle = {
    align: 'center',
    justify: 'center',
    color: 'white',
    rounded: 'full',
    bg: 'gray.100',
    mb: 1
  }

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO/>
      {isMobile && <Nav/>}
      <Flex>
        <Box flex="1" >
          {!isMobile && <Box pos="absolute" w={120} h={90} zIndex={9} bgColor="rgba(0,0,0,.09)" p={3} pt={7} d={{base: 'none', sm: 'block'}}>
            <Center><Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" /></Center>
          </Box>}
          <Image src={`${process.env.PUBLIC_URL}/events/falala/main_banner.png`} />

          <Box p={{base: 4, sm: 10}}>
            <Heading>立即報名：「童你講故事」氣候與環境繪本線上共讀會</Heading>
            <Divider/>
            <Text {...pStyle}>
              由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa La La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
            </Text>

            <Text {...pStyle}>
              在共讀會上，Fa La La老師將生動地講述《無家可歸的我》，配合精美插畫，向小朋友介紹海平面上升、北極融冰、澳洲山火等世界環境面臨的重要事件，並分享愛護環境、家庭節能減碳的小貼士，包括乘搭公共交通工具、珍惜食物等。趁著今年世界地球日，我們邀請您和家中小朋友一起聆聽大自然的故事，一小時認識世界環境問題，做個大小「地球修理員」。
            </Text>
            {/* <Text {...pStyle}>
              由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa La La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
            </Text> */}
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Earth_day_storybook_1.jpg`} />
                  </Flex>
                  <Text>《無家可歸的我》繪本講述野生動物生活受到環境問題影響的故事，由綠色和平團隊耗時9個月製作而成。</Text>
                </Stack>
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Polar_bear_and_Koala.png`} />
                  </Flex>
                  <Text>不少野生動物例如北極熊、樹熊等，因為氣候變化與環境破壞而失去家園，值得我們關注。</Text>
                </Stack>
              </SimpleGrid>
            </Box>
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <Divider/>
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <ImageWithColumn pStyle={pStyle}/>
          </Box>

        </Box>
        <Box w={{base: 0, md: '640px'}} p={10} d={{base: 'none', md: 'block'}}>
          <Sticky stickyStyle={{zIndex: 10}}>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
          {submitted ? <NewFrameSubmittedForm formContent={content} /> : <NewFrameForm formContent={content} showProgress={false} newsLetter={false}/>}
          </Box>
          </Sticky>
        </Box>
      </Flex>

      <Button
        d={{base: 'block', md: 'none'}}
        w="100%"
        color="#FFF"
        bg="orange"
        _hover={{ bg: "campaign.oceans" }}
        height="60px"
        borderRadius="0"
        fontSize="2xl"
        pos="fixed"
        bottom={0}
        zIndex={9}
        onClick={()=>togglePanel(true)}
        style={{zIndex: 999}}
        letterSpacing={4}
      >
        {content.submit_text}
      </Button>
      <Panel formContent={content} />
      <Footer />
    </ChakraProvider>
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


export default connect(mapStateToProps, mapDispatchToProps)(Index);
