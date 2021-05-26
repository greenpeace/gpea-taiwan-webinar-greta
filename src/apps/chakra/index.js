import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import {
  ChakraProvider,
  Grid,
  GridItem,
  Box,
  Image,
  Flex,
  Center,
  Text,
  Heading,
  VStack,
  Button,
  useColorModeValue,
  Container,
  Spacer,
} from "@chakra-ui/react";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import Tab from "./components/sticky/tab";
import * as themeActions from "store/actions/action-types/theme-actions";
import Sticky from "react-sticky-el";
import themeConfig from "../../../theme";

import { images, otherImages } from "./components/parallex/images";
import ParallaxImage from "./components/parallex/parallexImages";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import SwiperCore, { Mousewheel, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const Index = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
  const textStyle = {
    fontSize: { base: "md", sm: "18px" },
    color: "rgba(0,0,0,.65)",
    lineHeight: 1.8,
  };

  const textStyleOther = {
    fontSize: { base: "sm", sm: "md" },
    color: "rgba(0,0,0,.65)",
    lineHeight: 1.5,
  };

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <ChakraProvider theme={themeConfig}>
      <Box
        pos="absolute"
        w={120}
        h={90}
        zIndex={9}
        bgColor="rgba(0,0,0,.09)"
        p={3}
        pt={7}
      >
        <Center>
          <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" />
        </Center>
      </Box>
      <Grid
        h={{ base: 640, sm: "90vh" }}
        minHeight={{ base: 640, sm: "960px" }}
        templateRows={{ base: "repeat(7, 1fr)", sm: "repeat(11, 1fr)" }}
        templateColumns="repeat(15, 1fr)"
      >
        <GridItem
          pos="relative"
          d={{ base: "none", sm: "block" }}
          rowSpan={{ base: 4, sm: 9 }}
          colSpan={{ base: 15, sm: 10 }}
        >
          <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg')"
            bgSize="cover"
          />
        </GridItem>
        <GridItem
          rowSpan={{ base: 4, sm: 2 }}
          colSpan={{ base: 15, sm: 5 }}
          pos="relative"
          name="test1"
        >
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 5000,
            }}
            autoHeight={true}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
            }}
          >
            <SwiperSlide>
              <Image
                src={
                  isMobile
                    ? "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg"
                    : "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={
                  isMobile
                    ? "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg"
                    : "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </GridItem>
        <GridItem
          d={{ base: "none", sm: "block" }}
          rowSpan={{ base: 8, sm: 9 }}
          colSpan={{ base: 15, sm: 5 }}
        >
          <Center h="100%" pl={10} pr={10} className="element">
            {submitted ? <NewFrameSubmittedForm /> : <NewFrameForm />}
          </Center>
        </GridItem>
        <GridItem rowSpan={{ base: 3, sm: 4 }} colSpan={{ base: 15, sm: 10 }}>
          <Flex color="white" h="100%">
            <Center bg="campaign.oceans" w="100%">
              <Box maxW="64rem" py={5} px={{ base: 3, sm: 10 }}>
                <Heading fontSize={{ base: "xl", sm: "3xl" }} mb={4}>
                  守護大嶼
                </Heading>
                <Text {...textStyle} color="#FFF">
                  香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。
                </Text>
              </Box>
            </Center>
          </Flex>
        </GridItem>
      </Grid>

      <Tab />

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        pt={{ base: 20, sm: 40 }}
        pb={30}
      >
        <Center px={{ base: 4, sm: 10 }}>
          <VStack maxWidth={"3xl"}>
            <Heading
              fontSize={{ base: "2xl", sm: "4xl" }}
              mb={8}
              color="campaign.oceans"
            >
              堅守香港海洋最後一道防線
            </Heading>
            <Text {...textStyle}>
              政府強推「明日大嶼」，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態；它亦是香港史上最昂貴的基建，造價至少6,240億元，不但可能於10年內（2031
              -
              32年度）耗盡香港的財政儲備，亦無法有效解決香港逼在眉睫的房屋問題。雖然財委會強行通過了「明日大嶼」5.5億元前期研究撥款，但距離真正落實填海工程仍有極多變數，綠色和平絕不會放棄「堅守大嶼」。
            </Text>
          </VStack>
        </Center>
        {!isMobile &&
          otherImages.map((image) => (
            <ParallaxImage key={image.src} {...image} />
          ))}

        <Container maxWidth={"8xl"} pt={8} style={{ overflow: "hidden" }}>
          <Flex direction={{ base: "column", sm: "row" }}>
            <Box p={{ base: 0, sm: 4 }} w={{ base: "100%", sm: 980 }}>
              <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg" />
              <Box pt={6}>
                <Text {...textStyleOther}>
                  事實上，香港有比「明日大嶼」更明智的選項：綠色和平調查發現，發展棕地造價僅333億元卻可興建近14萬伙公營房屋。
                </Text>
              </Box>
            </Box>
            <Spacer />

            <Box
              mt={{ base: 10, sm: 480 }}
              p={{ base: 0, sm: 4 }}
              w={{ base: "100%", sm: 480 }}
            >
              <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/close-up_WBSE_Kevin_Lok.c5c8bcfc.jpg" />
              <Box pt={6}>
                <Text {...textStyleOther}>
                  海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box pt={{ base: 20, sm: 40 }} pb={30}>
        <Center px={{ base: 4, sm: 0 }}>
          <VStack maxWidth={"3xl"}>
            <Heading fontSize={{ base: "xl", sm: "3xl" }} mb={4}>
              「明日」的生態威脅
            </Heading>
            <Text {...textStyle}>
              鄰近填海選址海域{" "}
              <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                具生態價值
              </span>{" "}
              生態價值{" "}
              <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                絕不應被刻意低估{" "}
              </span>
            </Text>
          </VStack>
        </Center>

        {!isMobile &&
          images.map((image) => <ParallaxImage key={image.src} {...image} />)}

        <Container
          maxWidth={"8xl"}
          pt={{ base: 2, sm: 8 }}
          style={{ overflow: "hidden" }}
        >
          <Flex direction={{ base: "column", sm: "row" }}>
            <Box
              mt={{ base: 10, sm: 480 }}
              p={{ base: 0, sm: 4 }}
              w={{ base: "100%", sm: 480 }}
            >
              <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/hk-brownfield.9533d1d7.jpg" />
              <Box pt={6}>
                <Text {...textStyleOther}>
                  我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢
                </Text>
              </Box>
            </Box>

            <Spacer />

            <Box
              mt={{ base: 10, sm: 0 }}
              p={{ base: 0, sm: 4 }}
              w={{ base: "100%", sm: 980 }}
            >
              <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg" />
              <Box pt={6} {...textStyleOther}>
                <Text>
                  全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，
                  <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                    生態價值絕不應被刻意低估
                  </span>
                  。
                </Text>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        pt={{ base: 20, sm: 40 }}
        pb={{ base: 20, sm: 60 }}
      >
        <Container maxWidth={"8xl"} pt={8} style={{ overflow: "hidden" }}>
          <Flex direction={{ base: "column-reverse", md: "row" }}>
            <Box
              mt={{ base: -10, md: 120 }}
              w={{ base: "auto", md: 720 }}
              mr={{ base: 0, md: -180 }}
              mx={{ base: "10px", sm: 0 }}
              style={{ zIndex: 9 }}
            >
              <Box p={6} bgColor="#FFF">
                <Center mb={{ base: 10, sm: 50 }}>
                  <VStack maxWidth={"3xl"}>
                    <Heading
                      fontSize={{ base: "xl", sm: "3xl" }}
                      mb={{ base: 2, sm: 4 }}
                    >
                      史上最貴基建
                    </Heading>
                    <Text {...textStyle}>
                      耗時至少{" "}
                      <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                        13年
                      </span>{" "}
                      耗費至少{" "}
                      <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                        6,240億公帑
                      </span>
                    </Text>
                  </VStack>
                </Center>
                <Text {...textStyleOther}>
                  現時輪候公屋年期為5.5年，逾20萬劏房戶等上樓，惟填海預料
                  <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                    至少在13年後
                  </span>{" "}
                  -
                  2032年才能讓市民入伙，無法紓緩燃眉之急，甚至要「邊住邊填海」，居住環境堪憂。
                </Text>
                <Text {...textStyleOther}>
                  「明日大嶼」耗費
                  <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                    至少6,240億元公帑
                  </span>
                  ，工程延期超支仍未計算在內，令人擔憂將耗盡香港的財政儲備。
                </Text>
              </Box>
            </Box>

            <Box p={{ base: 0, sm: 4 }} w={{ base: "100%", sm: 860 }}>
              <Swiper slidesPerView={1} autoplay={{ delay: 5000 }}>
                <SwiperSlide>
                  <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/hk-city.aaa0192a.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/hk-brownfield.9533d1d7.jpg" />
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box>
        <Flex direction={{ base: "column", sm: "row" }}>
          <Box
            w={{ base: "100%", sm: 960, md: 1180 }}
            h={{ base: "auto", sm: 720 }}
            pos="relative"
            py={40}
          >
            <Box
              pos="absolute"
              top="0"
              left="0"
              bottom="0"
              right="0"
              backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/brownfield.71dd71ae.jpg')"
              bgSize="cover"
              // backgroundPosition="center"
            />
          </Box>

          <Center w="100%">
            <Box style={{ zIndex: 9 }} p={6} bgColor="#FFF" width="100%">
              <Center mb={50}>
                <VStack maxWidth={"2xl"} align="baseline">
                  <Heading
                    fontSize={{ base: "2xl", sm: "4xl" }}
                    mb={8}
                    color="campaign.oceans"
                  >
                    我們有更明智的選擇
                  </Heading>
                  <Text {...textStyle}>
                    發展棕地成本
                    <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                      比填海便宜8成
                    </span>{" "}
                    即可興建
                    <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                      14萬伙公營房屋
                    </span>
                  </Text>
                  <br />
                  <Box>
                    <Text {...textStyleOther}>
                      事實上，香港有比「明日大嶼」更明智的選項：發展408公頃的棕地，造地成本估算為333億元。
                      <br />
                      <br />
                      「除了比填海
                      <span style={{ color: "#108ee9", fontWeight: "bold" }}>
                        便宜8成
                      </span>
                      以外，政府亦可引用《收回土地條例》，以比填海更快的速度，興建近14萬伙公營房屋
                      ，並取締棕地上的違法及違規作業。
                    </Text>
                  </Box>
                  <br />
                  {!isMobile && (
                    <Link
                      style={{ textDecoration: "none" }}
                      to="test1"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                      <Button
                        w="120"
                        height="60px"
                        borderRadius="0"
                        size="lg"
                        color="#FFF"
                        bg="#108ee9"
                        _hover={{ bg: "#21C5D8" }}
                      >
                        立即聯署
                      </Button>
                    </Link>
                  )}
                </VStack>
              </Center>
            </Box>
          </Center>
        </Flex>
      </Box>

      <Button
        d={{ base: "block", sm: "none" }}
        w="100%"
        color="#FFF"
        bg="campaign.arctic"
        _hover={{ bg: "campaign.oceans" }}
        height="60px"
        borderRadius="0"
        size="lg"
        pos="fixed"
        bottom={0}
        zIndex={9}
        onClick={() => togglePanel(true)}
        style={{ zIndex: 999 }}
        // variant="outline"
      >
        立即聯署
      </Button>
      <Panel />
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
