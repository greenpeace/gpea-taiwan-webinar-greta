import React from "react";
import { connect } from "react-redux";
import Sticky from "react-sticky-el";
import content from "./data/content";
import {
  ChakraProvider,
  Box,
  Image,
  Icon,
  Flex,
  Text,
  Heading,
  VStack,
  Button,
  useColorModeValue,
  Container,
  Spacer,
  Divider,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { IoTimeSharp, IoTimeOutline, IoVideocam } from "react-icons/io5";
import SEO from "./seo";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "./theme.js";
import ImageWithColumn from "./components/feature/imageWithColumn";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text>{text}</Text>
    </Stack>
  );
};

const Index = ({ submitted, togglePanel }) => {
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
    fontSize: { base: "md", sm: "lg" },
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
      <Flex>
        <Box flex="1">
          {/* <Box
            pos="absolute"
            w={120}
            h={90}
            zIndex={9}
            bgColor="rgba(0,0,0,.09)"
            p={3}
            pt={7}
            d={{ base: "none", sm: "block" }}
          >
            <Center>
              <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" />
            </Center>
          </Box> */}

          <Image
            src={`${process.env.PUBLIC_URL}/events/falala/main_banner.png`}
          />

          <Box p={{ base: 4, sm: 10 }}>
            <Heading as="h1" size="xl" color="gray.900">
              立即報名 「童你講故事」氣候與環境繪本線上共讀會
            </Heading>
            <Divider />
            <Box>
              <Stack pt={4} spacing={4}>
                <Feature
                  icon={
                    <Icon as={IoTimeOutline} color={"yellow.500"} w={5} h={5} />
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
                    <Icon as={IoVideocam} color={"green.500"} w={5} h={5} />
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
                {/* <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Falala_and_Brian.jpeg`} />
                  </Flex>
                  <Text>Falala老師曾與綠色和平、小作家Brian簡鏡倫合作分享保育海洋故事The Tale of Tom the Turtle。</Text>
                </Stack> */}
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/events/falala/Polar_bear_and_Koala.png`}
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

          <Box p={{ base: 2 }}>
            <Divider />
          </Box>

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
              mb="6"
            >
              故事導師 Fa La La老師
            </Heading>
            <Stack spacing={4}>
              <Feature
                icon={
                  <Icon as={IoTimeOutline} color={"yellow.500"} w={5} h={5} />
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
                icon={<Icon as={IoVideocam} color={"green.500"} w={5} h={5} />}
                iconBg={useColorModeValue("green.100", "green.900")}
                text={"線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）"}
              />
            </Stack>
            <Text size="sm" color="gray.500" mt="4" mb="4">
              資深幼兒教育工作者，並於公共圖書館擔任故事導師。
            </Text>
            <ImageWithColumn pStyle={pStyle} captionStyle={{ captionStyle }} />
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
                  showProgress={false}
                  newsLetter={false}
                />
              )}
            </Box>
          </Sticky>
        </Box>
      </Flex>
      <Button
        d={{ base: "block", md: "none" }}
        w="100%"
        color="#FFF"
        bg="orange"
        _hover={{ bg: "campaign.oceans" }}
        height="48px"
        borderRadius="0"
        fontSize="xl"
        pos="fixed"
        bottom={0}
        zIndex={9}
        onClick={() => togglePanel(true)}
        style={{ zIndex: 999 }}
        letterSpacing={4}
        // variant="outline"
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
