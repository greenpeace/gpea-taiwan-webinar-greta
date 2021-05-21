import React from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
import content from "./data/content";
import {
  ChakraProvider,
  Circle,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Icon,
  Link,
} from "@chakra-ui/react";
import SEO from "./SEO";
import Nav from "./components/header/nav";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "./theme.js";
import ImageWithColumn from "./components/feature/imageWithColumn";

import { IoCalendarOutline, IoTimeSharp, IoVideocam } from "react-icons/io5";

const Index = ({ submitted, togglePanel }) => {
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Circle size="40px" color="white" bg={iconBg}>
          {icon}
        </Circle>
        <Text pl="2" fontSize="lg" color="gray.900">
          {text}
        </Text>
      </Stack>
    );
  };

  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });

  const captionStyle = {
    as: "span",
    borderLeft: "4px solid #66cc00",
    paddingLeft: "12px",
    size: "sm",
    color: "gary.500",
  };

  const pStyle = {
    as: "p",
    marginTop: 8,
    color: "gray.700",
    fontSize: { base: "sm", sm: "md" },
    lineHeight: "1.7",
  };

  const flexBoxStyle = {
    align: "center",
    justify: "center",
    color: "white",
    rounded: "full",
    bg: "gray.100",
    mb: 1,
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      {isMobile && <Nav />}
      <Flex>
        <Box flex="1">
          <Image
            src={
              "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/04/1d3a7e7b-earthday_main_banner.jpg"
            }
          />

          <Box p={{ base: 4, sm: 10 }} mt="4">
            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "4xl" }}
              color="brand.500"
            >
              立即報名 「童你講故事」
              <br />
              <Text mt="2" color="gray.900">
                氣候與環境繪本線上共讀會
              </Text>
            </Heading>
            <Divider my={{ base: 8, lg: 10 }} />
            <Box>
              <Stack pt={4} spacing={4}>
                <Feature
                  icon={
                    <Icon
                      as={IoCalendarOutline}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"日期：2021年4月24日（星期六）"}
                />
                <Feature
                  icon={
                    <Icon as={IoTimeSharp} color={"yellow.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"時間：下午4時半至5時半"}
                />
                <Feature
                  icon={
                    <Icon as={IoVideocam} color={"brand.400"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={
                    "線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）"
                  }
                />
              </Stack>
            </Box>
            <Text {...pStyle}>
              由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa
              La
              La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
            </Text>
            <Text {...pStyle}>
              在共讀會上，Fa La
              La老師將生動地講述《無家可歸的我》，配合精美插畫，向小朋友介紹海平面上升、北極融冰、澳洲山火等世界環境面臨的重要事件，並分享愛護環境、家庭節能減碳的小貼士，包括乘搭公共交通工具、珍惜食物等。趁著今年世界地球日，我們邀請您和家中小朋友一起聆聽大自然的故事，一小時認識世界環境問題，做個大小「地球修理員」。
            </Text>
          </Box>

          <Box p={{ base: 4 }}>
            <Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/events/falala/Earth_day_storybook_1.jpg`}
                      pb={4}
                    />
                  </Flex>
                  <Text {...captionStyle}>
                    《無家可歸的我》繪本講述野生動物生活受到環境問題影響的故事，由綠色和平團隊耗時9個月製作而成。
                  </Text>
                </Stack>
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/events/falala/Polar_bear_and_Koala.jpg`}
                      pb={4}
                    />
                  </Flex>
                  <Text {...captionStyle}>
                    不少野生動物例如北極熊、樹熊等，因為氣候變化與環境破壞而失去家園，值得我們關注。
                  </Text>
                </Stack>
              </SimpleGrid>
            </Box>
          </Box>

          <Divider my={{ base: 8, lg: 10 }} />
          <Box p={{ base: 4, sm: 10 }}>
            <Box
              maxW="120px"
              borderColor="brand.600"
              borderWidth="1px"
              borderRadius="full"
              overflow="hidden"
              mb="6"
            >
              <Image
                src={`${process.env.PUBLIC_URL}/events/falala/Miss Falala profile picture.png`}
              />
            </Box>
            <Heading
              fontSize={{ base: "md", sm: "2xl" }}
              color="brand.600"
              mb="2"
            >
              故事導師 Fa La La老師
            </Heading>
            <Text size="sm" color="gray.500" mb="8">
              資深幼兒教育工作者，並於公共圖書館擔任故事導師。
            </Text>

            <ImageWithColumn pStyle={pStyle} captionStyle={{ captionStyle }} />

            <Divider my={{ base: 8, lg: 10 }} />
            <SimpleGrid mt="4" columns={{ base: 1, md: 2 }} spacing={10}>
              <Flex direction="column">
                <Image
                  borderRadius="8px"
                  alt={"feature image"}
                  src={
                    "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/04/86661c3b-說故事-storytelling-pic.jpg"
                  }
                  pb={4}
                />
                <Text>
                  綠色和平目標在兩個月內，派送300本《無家可歸的我》繪本到香港各區幼稚園！
                </Text>
              </Flex>
              <Stack spacing={4}>
                <Heading
                  as="h2"
                  size="md"
                  color="brand.500"
                  style={{ lineHeight: "1.5" }}
                >
                  &nbsp;&nbsp;立即支持
                  <br />
                  「童愛環境 · 地球日贈書」活動
                </Heading>
                <Text {...pStyle}>
                  只要您以每月$200（約每日$6）支持，我們將代表您送出三本原創繪本《無家可歸的我》給一間香港幼稚園，讓更多小朋友認識氣候變化，從小培養出愛護環境嘅意識。
                </Text>
                <Text {...pStyle}>
                  為感謝您的支持，我們也另外贈送一本繪本給您。
                </Text>
                <Link href="https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&campaign=earthday&utm_campaign=earthday">
                  <Button
                    mt="2"
                    color="#FFF"
                    bg="brand.500"
                    _hover={{ bg: "brand.400" }}
                    borderRadius="24px"
                    fontSize="md"
                    letterSpacing={2}
                  >
                    立即支持
                  </Button>
                </Link>
              </Stack>
            </SimpleGrid>
          </Box>
        </Box>
        <Box
          w={{ base: 0, md: "480px", lg: "580px" }}
          p={10}
          d={{ base: "none", md: "block" }}
        >
          <Sticky stickyStyle={{ zIndex: 10 }}>
            <Box boxShadow="lg" p="6" rounded="md" bg="white">
              {submitted ? (
                <NewFrameSubmittedForm formContent={content} />
              ) : (
                <NewFrameForm
                  formContent={content}
                  version={true}
                  showProgress={false}
                  newsLetter={false}
                />
              )}
            </Box>
          </Sticky>
        </Box>
      </Flex>
      <Box
        pos="fixed"
        bottom={0}
        zIndex={9}
        p="4"
        w="100%"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          borderColor: "rgba(255, 255, 255, 0.8)",
          boxShadow: "0px 0px 20px 0px rgb(0 0 0 / 10%)",
          paddingTop: "6px",
          paddingBottom: "8px",
          alignItems: "center",
          justifyContent: "center",
        }}
        d={{ base: "flex", md: "none" }}
      >
        <Button
          w="80%"
          color="#FFF"
          bg="orange"
          _hover={{ bg: "campaign.oceans" }}
          borderRadius="24px"
          fontSize="xl"
          letterSpacing={4}
          style={{ zIndex: 999 }}
          onClick={() => togglePanel(true)}
        >
          {content.submit_text}
        </Button>
      </Box>
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
