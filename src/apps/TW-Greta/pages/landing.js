// import "swiper/swiper.scss";
import React, { useRef } from "react";
import { connect } from "react-redux";
import Sticky from "react-sticky-el";
import {
  ChakraProvider,
  Box,
  Button,
  Divider,
  Image,
  Flex,
  Text,
  Heading,
  Link,
  Stack,
  Center,
} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import Footer from "../components/footer";
// import SimpleCarousel from "components/banner/imageCarousel";
import Webinar from "components/sections/webinar";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";

import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../../../theme";
// import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
// import SwiperCore, { Navigation } from "swiper/core";

import banner from "../assets/images/Greenpeace-Greta.jpg";
// import kellyProfile from "../assets/images/MD-GP-PORTRAITKELLYHUANG001.jpg";
// import thumbnail from "../assets/images/GP0STUTFE_Medium_res.jpg";
// import thumbnailTwo from "../assets/images/GP1SV4UD_Medium_res.jpg";
// import thumbnailThree from "../assets/images/GP1SUZTO_Medium_res.jpg";
// import swiper1 from "../assets/images/swiper1.jpg";
// import swiper2 from "../assets/images/swiper2.jpg";
// import swiper3 from "../assets/images/swiper3.jpg";
// import swiper4 from "../assets/images/swiper4.jpg";
// import swiper5 from "../assets/images/swiper5.jpg";

const Landing = ({ submitted, togglePanel }) => {
  const swiperRef = useRef(null);
  const subHeadline = {
    color: "gray.700",
    fontSize: "sm",
    lineHeight: "1.5",
    mt: "10",
    mb: "4",
    pl: "2",
    borderLeft: "4px solid #00b474",
  };
  const creditLine = {
    mt: "4",
  };

  const WebinarContent = {
    title: "分享會詳情",
    date: "日期：2021年7月27日（星期二）",
    time: "時間：晚間7時至9時",
    description: "線上分享會平台：Zoom（線上登記後會獲得相關連結和密碼）",    
  };

  // const thumbnailContent = [
  //   {
  //     thumbnail: thumbnailTwo,
  //     credit: "© Marten van Dijl / Greenpeace",
  //     content:
  //       "Kelly與團隊24小時站崗，觀察採礦機器的一舉一動，揭露企業污染海洋的真相。",
  //   },
  //   {
  //     thumbnail: thumbnail,
  //     credit: "© Marten van Dijl / Greenpeace",
  //     content:
  //       "綠色和平團隊駕駛快艇靠近巨大的採礦機器，舉起橫額與畫上「RISK」字眼抗議。",
  //   },
  //   {
  //     thumbnail: thumbnailThree,
  //     credit: "© Marten van Dijl / Greenpeace",
  //     content:
  //       "Kelly在航程中遇見野生海豚、鮪魚、極度瀕危的欖蠵龜等海洋生物。",
  //   },
  // ];

  // const simpleSwiperData = [swiper1, swiper2, swiper3, swiper4, swiper5];

  // // install Swiper modules
  // SwiperCore.use([Navigation]);

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      <Nav showButton={false} />
      <Flex>
        <Box flex="1" style={{ minWidth: "0px" }}>
          <Box px={4} py={{ base: 4, md: 8 }} bgColor="#DEECFF">
            <Box>
              <Image src={banner} borderRadius={8} />
            </Box>
          </Box>

          <Box mt={0}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 140">
              <path
                fill="#DEECFF"
                d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,53.3C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </Box>

          <Box px={{ base: 4, lg: 6 }}>
            <Box>
              <Text
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                fontWeight="bold"
                color="gray.900"
                lineHeight={1.2}
              >
                <Text color="brand.500" mb={2} maxWidth="780px">
                【線上電影院】《我是葛雷塔 I am Greta》從環保少女到全球青年運動
                </Text>
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1" style={{ minWidth: "0px", paddingBottom: "2rem" }}>
                <Divider my={{ base: 8 }} />

                <Webinar content={WebinarContent} />

                <Divider my={{ base: 8 }} />

                <Text {...subHeadline}>活動簡介</Text>

                <Text variant="paragraph">
                歡迎您報名，參與此次的【線上電影院】播映，一同觀賞《我是葛雷塔 I am Greta》這部歐洲紀錄片。映前20分鐘，我們將一同聊聊全球青年氣候運動的發展，再進入紀錄片的視角，一窺十五歲的瑞典學生，如何從知識上認識氣候變遷，而開始身體力行表達意見和做出生活中的選擇，並逐漸激起並擴散了全球青年氣候運動的漣漪。
                </Text>   
                <Text variant="paragraph">
                <br></br>
                報名注意事項：
                <li>請於活動正式開始前十分鐘加入視訊。</li>
                <li>活動名額有限，額滿為止。</li>
                <li>活動提醒與視訊相關資訊會以Email形式通知，請密切留意您的提供電子信箱。</li>                
                </Text>                    
              </Box>
            </Flex>
          </Box>

           
        </Box>
        <Box
          w={{ base: 0, md: "50%", lg: "500px" }}
          px="4"
          py={{ base: 4, md: 8 }}
          d={{ base: "none", md: "block" }}
        >
          <Sticky stickyStyle={{ zIndex: 10 }}>
            {/* <DonateForm formContent={content} /> */}
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
      ></Panel>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
