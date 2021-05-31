import "swiper/swiper.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
import {
  Avatar,
  ChakraProvider,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  useColorModeValue,
  Circle,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import Footer from "../components/footer";
import Webinar from "components/sections/webinar";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../../../theme";

import { IoCalendarOutline, IoTimeSharp, IoVideocam } from "react-icons/io5";

import banner from "../assets/images/PFC-webinar-banner-2-banner.jpg";
import Dalu from "../assets/images/Dalu.png";
import DaluImage from "../assets/images/123.jpg";
import Ann from "../assets/images/Ann.png";
import AnnImage from "../assets/images/1111.jpg";
import Kaman from "../assets/images/Kaman.png";
import KamanImage from "../assets/images/20210508_SSPHunting_17_square.jpg";
import Leanne from "../assets/images/Leanne.png";
import LeanneImage from "../assets/images/news-sns-plastics-pfc.jpg";
import frBanner from "../assets/images/20210508_SSPHunting_17.jpg";

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
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

  const subHeadline = {
    color: "gray.700",
    fontSize: "sm",
    lineHeight: "1.5",
    mt: "10",
    mb: "4",
    pl: "2",
  };

  const pStyle = {
    as: "p",
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
  };

  const switchButtonWrap = {
    flex: 1,
    bgColor: "#FFF",
    roundedTop: "md",
    pt: { base: 2, sm: 4 },
    pb: { base: 2, sm: 4 },
    cursor: "pointer",
    h: { base: "auto", sm: "auto" },
    align: "center",
  };

  const switchButton = {
    borderRadius: "50%",
    overflow: "hidden",
    pos: "relative",
    w: { base: "58px", sm: "96px" },
    h: { base: "58px", sm: "96px" },
    pb: 8,
  };

  const authorContent = [
    {
      name: "Dalu",
      nameZH: "連桷璋",
      avatar: Dalu,
      title: "大埔街坊暨社區營造行動",
      image: DaluImage,
      imageDescription:
        "連桷璋不時開設社區回收站「不是垃圾站 X 不是修理站」，推動資源共享分類回收。",
      content:
        "大埔街坊暨社區營造行動者，前大埔區議員，關注議題包括大埔公共空間發展、環保生態、社區經濟圈等。致力為街坊提供個案跟進、組織社區互助活動如社區回收站「不是垃圾站 X 不是修理站」、廚餘回收計劃及文化活動如中秋節大型月亮裝置藝術、政策倡議等。",
    },
    {
      name: "Ann",
      nameZH: "李秀平",
      avatar: Ann,
      title: "「日常豊作」裸買店店主",
      image: AnnImage,
      imageDescription: "「日常豐作」裸買店店主Ann逢星期三也會開設有機菜攤檔。",
      content:
        "裸買店「日常豊作」店主，主張「祼買生活．無塑可能」環保健康豐足的生活哲學、鄰里互助與文化教育，建立裸買店聯盟，聚集一群有裸買店夢想的人，一同學習及分享開店心得。",
    },
    {
      name: "Leanne",
      nameZH: "譚穎琳",
      avatar: Leanne,
      title: "綠色和平項目主任",
      image: LeanneImage,
      imageDescription:
        "綠色和平的「全城走塑計劃」集齊一眾走塑隊員在社區搜索走塑小店，自2018年至今，有164位參與，以及全港逾750間商戶加入走塑行列。看到「全城走塑」貼紙，即是找到走塑友善或提供走塑優惠的店舖!。",
      content:
        "全城走塑項目主任，倡議及推動走塑的無限可能，積極關心企業塑膠問題及香港塑膠政策。過去活躍於社區回收活動，看到源頭減廢的重要性，更加堅定了走塑的目標。希望廣招戰友一同打拼，一齊學一齊試，一齊達到無塑社區的願景!",
    },
    {
      name: "Kaman",
      nameZH: "柯家文",
      avatar: Kaman,
      title: "綠色和平社區外展主任",
      image: KamanImage,
      content:
        "全城走塑社區外展主任，與「走塑小隊」捐窿捐罅，發掘社區走塑小店。疫情下，講環保，搞走塑，看似天方夜譚，但是我們「走塑小隊」發現，社區仍有好多街坊及小店堅持走塑。我們相信，落手落腳，邊玩邊學，今天一小步，社區一大步。成為我地走塑小隊一員啦，預埋你啦！！",
    },
  ];

  const WebinarContent = {
    date: "日期：2021年6月7日（星期一）",
    time: "時間：晚上8時至9時",
    description: "線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）"
  }

  const [current, setCurrent] = useState(authorContent[0]);

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Flex>
        <Box flex="1" style={{ minWidth: "0px" }}>
          <Box px={4} py={{ base: 4, md: 8 }} bgColor="#F9BC81">
            <Box>
              <Image src={banner} borderRadius={8} />
            </Box>
          </Box>

          {/** https://getwaves.io/ */}
          <Box mt={0}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
              <path
                fill="#F9BC81"
                d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,53.3C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </Box>

          <Box px={{ base: 4, lg: 6 }}>
            <Box>
              <Text {...subHeadline}>WEBINAR</Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                fontWeight="bold"
                color="gray.900"
                lineHeight={1.2}
              >
                <Text color="brand.500" mb={2} maxWidth="780px">
                  「綠色社區點做起？達人同你渾身解塑」<Text>網上共學教室</Text>
                </Text>
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1">
                <Heading
                  color="gray.900"
                  fontSize={{ base: "lg", sm: "2xl" }}
                  mt={4}
                >
                  覺得自己只是被動的一方？見到社會好多事都看似沒可能改變？
                </Heading>
                <Divider my={{ base: 8 }} />

                <Webinar content={WebinarContent}/>
                
                <Divider my={{ base: 8 }} />

                <Text {...subHeadline}>ABOUT</Text>

                <Text as="p" {...pStyle}>
                  自己社區自己救！走塑不是一個人的事，是整個社區的事！我們的日常生活與社區密不可分，每人都是社區不可或缺的一分子。想自備餐盒買外賣？想走塑購物？總不能單靠個人力量，還需餐廳、企業的合作，一起建構走塑社區，讓大家日常生活都「有得揀」！
                  <br />
                  <br />
                  實現理想走塑社區這個終極目標好像很遙遠，不知如何開始第一步？綠色和平將於6月7日（星期一），舉辦網上共學教室「綠色社區點做起？達人同你渾身解塑」，邀請兩位積極連結街坊來改變社區的「社區達人」來分享：大埔街坊暨前區議員連桷璋，以及「日常豊作」裸買店店主李秀平Ann。談談過去的社區實驗，必定有成功有失敗，一起分享如何在社區推動議題，如何見招拆招！而要在社區推動走塑，嘉賓又有何想法？
                </Text>

                <Grid
                  templateColumns="repeat(6, 1fr)"
                  mt={10}
                  mb={10}
                  textAlign="center"
                >
                  <GridItem colSpan={{ base: 6, sm: 6 }}>
                    <Text
                      color="#005F89"
                      fontSize={"4xl"}
                      fontWeight={700}
                      bgGradient="linear(to-l, #FF725C,#F9BC81)"
                      bgClip="text"
                    >
                      有你，有可能！
                    </Text>
                  </GridItem>
                  <GridItem colSpan={{ base: 6, sm: 6 }} w="100%">
                    <Text
                      color="#FF725C"
                      fontSize={{ base: "3xl", sm: "4xl" }}
                      fontWeight={700}
                      bgGradient="linear(to-l, #FF725C,#F9BC81)"
                      bgClip="text"
                    >
                      集齊腦袋，集思廣益！
                    </Text>
                  </GridItem>
                </Grid>

                <Text as="p" {...pStyle}>
                  是次共學教室只是頭炮活動！目標是召集各路人馬加入「全城走塑社區小隊」，一起討論、研究、分享、交流，一起設計社區走塑計劃，改變膠運，共建全城走塑的理想社區。想知道之後一連串的全城走塑社區小隊共學活動及行動？想跟綠色和平一起推動社區項目？6月7日，約定你！
                </Text>
              </Box>
            </Flex>

            <Box pt={{ base: 10 }}>
              <Text {...subHeadline}>SPEAKERS</Text>
              <Flex direction="column">
                <Flex direction="row">
                  {authorContent.map((d, i) => (
                    <Box
                      onClick={() => setCurrent(d)}
                      {...switchButtonWrap}
                      bgColor={`${
                        current.name === d.name ? "#F9BC81" : "#FFF"
                      }`}
                      key={i}
                    >
                      <Box>
                        <Box {...switchButton}>
                          <Image src={d.avatar} pos="absolute" />
                        </Box>
                        <Box d={{ base: "none", xl: "block" }} align="center">
                          <Text
                            fontSize={"md"}
                            pt={2}
                            fontWeight={700}
                            color={`${
                              current.name === d.name ? "#FFF" : "#F9BC81"
                            }`}
                          >
                            <Text>
                              {d.nameZH}
                              <br />
                              {d.name}
                            </Text>
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Flex>
                <Box
                  bgColor="#FFF"
                  py={6}
                  px={{ base: 2, sm: 8 }}
                  borderTop="1px solid #F9BC81"
                >
                  <Box py={6}>
                    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing="8px">
                      <Box flex="1" pr={{ base: 0, sm: 12 }}>
                        <Stack
                          direction={["column", "row"]}
                          columns={{ base: 1, xl: 2 }}
                          alignItems="center"
                          spacing="8px"
                          mb={4}
                        >
                          <Avatar
                            size="2xl"
                            name={current.nameZH}
                            src={current.avatar}
                          />
                          <Box pt={4}>
                            <Heading fontSize="2xl" mb={2}>
                              <Text color="#005F89">{current.nameZH}</Text>
                            </Heading>
                            <Heading color="gray.500" fontSize="md">
                              {current.title}
                            </Heading>
                          </Box>
                        </Stack>

                        <Text as="p" {...pStyle}>
                          {current.content}
                        </Text>
                        {current.imageDescription && (
                          <Text {...pStyle} color="brand.500" fontWeight="bold">
                            {current.imageDescription}
                          </Text>
                        )}
                      </Box>
                      {current.image && (
                        <Box maxW="320px" pt={{ base: 6, sm: 0 }}>
                          <Image src={current.image} borderRadius="8px" />
                        </Box>
                      )}
                    </SimpleGrid>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box px={{ base: 4, sm: 8 }} pb={12}>
            <Divider my={{ base: 8, lg: 10 }} />

            <SimpleGrid mt="4" columns={{ base: 1, xl: 2 }} spacing={10}>
              <Flex direction="column">
                <Image borderRadius="8px" src={frBanner} />
              </Flex>
              <Stack spacing={4}>
                <Heading
                  as="h2"
                  size="lg"
                  color="brand.500"
                  style={{ lineHeight: "1.5" }}
                >
                  推動全港走塑
                  <br />
                  需要你的熱心支持！
                </Heading>
                <Text {...pStyle}>
                  請幫助綠色和平組織走塑小隊，身體力行走遍全港社區！您的捐助，將讓我們在2021年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，達成全港1,100間店鋪提供走塑友善措施。
                </Text>
                <Link
                  href="https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=plastics&ref=plastics-pfc-page"
                  isExternal
                >
                  <Button
                    mt="2"
                    color="#FFF"
                    bg="brand.500"
                    _hover={{ bg: "brand.400" }}
                    borderRadius="4px"
                    fontSize="md"
                    type="button"
                    letterSpacing={4}
                  >
                    立即捐助
                  </Button>
                </Link>
                <Text {...pStyle}>
                  綠色和平成立50年，從不接受政商界捐助，在環境工作上維持公正獨立！
                </Text>
              </Stack>
            </SimpleGrid>
          </Box>
        </Box>

        <Box
          w={{ base: 0, md: "50%", lg: "500px" }}
          px="4"
          py={{ base: 4, md: 8 }}
          d={{ base: "none", md: "block" }}
        >
          <Sticky stickyStyle={{ zIndex: 10 }}>
            <Box
              borderTop="4px solid #66cc00"
              boxShadow="lg"
              p={6}
              rounded="md"
              bg="white"
              overflow="hidden"
            >
              {submitted ? (
                <NewFrameSubmittedForm formContent={content} />
              ) : (
                <NewFrameForm
                  formContent={content}
                  version={true}
                  showProgress={false}
                  newsLetter={false}
                  birthDate={true}
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
          borderRadius="24px"
          fontSize="xl"
          letterSpacing={4}
          style={{ zIndex: 999 }}
          onClick={() => togglePanel(true)}
        >
          {content.submit_text}
        </Button>
      </Box>
      <Panel
        formContent={content}
        showProgress={false}
        newsLetter={false}
        birthDate={true}
      >
        {/* {submitted && isMobile && (
          <HeroSwiper isMobile={isMobile} swiperHeight="480px" />
        )} */}
      </Panel>
      <Footer />
    </ChakraProvider>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
    // submitted: false, // TEST submitted
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
