import "swiper/swiper.scss";
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
import SimpleCarousel from "components/banner/imageCarousel";
import Webinar from "components/sections/webinar";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";

import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../../../theme";
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

import banner from "../assets/images/oceansday-main.jpg";
import kellyProfile from "../assets/images/MD-GP-PORTRAITKELLYHUANG001.jpg";
import thumbnail from "../assets/images/GP0STUTFE_Medium_res.jpg";
import thumbnailTwo from "../assets/images/GP1SV4UD_Medium_res.jpg";
import thumbnailThree from "../assets/images/GP1SUZTO_Medium_res.jpg";
import swiper1 from "../assets/images/swiper1.jpg";
import swiper2 from "../assets/images/swiper2.jpg";
import swiper3 from "../assets/images/swiper3.jpg";
import swiper4 from "../assets/images/swiper4.jpg";
import swiper5 from "../assets/images/swiper5.jpg";

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
    date: "日期：2021年6月27日（星期日）",
    time: "時間：上午11時至12時30分",
    description: "線上分享會平台：Zoom（線上登記後會獲得相關連結和密碼）",    
  };

  const thumbnailContent = [
    {
      thumbnail: thumbnailTwo,
      credit: "© Marten van Dijl / Greenpeace",
      content:
        "Kelly與團隊24小時站崗，觀察採礦機器的一舉一動，揭露企業污染海洋的真相。",
    },
    {
      thumbnail: thumbnail,
      credit: "© Marten van Dijl / Greenpeace",
      content:
        "綠色和平團隊駕駛快艇靠近巨大的採礦機器，舉起橫額與畫上「RISK」字眼抗議。",
    },
    {
      thumbnail: thumbnailThree,
      credit: "© Marten van Dijl / Greenpeace",
      content:
        "Kelly在航程中遇見野生海豚、鮪魚、極度瀕危的欖蠵龜等海洋生物。",
    },
  ];

  const simpleSwiperData = [swiper1, swiper2, swiper3, swiper4, swiper5];

  // install Swiper modules
  SwiperCore.use([Navigation]);

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
                  彩虹勇士號的海上任務：向世界說出海洋破壞的真相
                </Text>
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1" style={{ minWidth: "0px" }}>
                <Divider my={{ base: 8 }} />

                <Webinar content={WebinarContent} />

                <Divider my={{ base: 8 }} />

                <Text {...subHeadline}>活動簡介</Text>

                <Text variant="paragraph">
                綠色和平全球海洋數位專案主任黃毓琪Kelly在年初登上「彩虹勇士號」船艦，任務地點極為偏遠，航行近三個月，見證並抗議太平洋深海採礦測試，更揭露GSR採礦機器墜海第一手消息，向世界說出企業破壞海洋生態的真相。
                </Text>
                <Text variant="paragraph">
                綠色和平這次請來這位「海洋守護者」和大家介紹「彩虹勇士號」，認識船艙與駕駛室，並了解綠色和平行動團隊的任務。Kelly將分享海洋行動的紀錄與分享公海環境真實狀況，在太平洋遇上海豚等珍貴經歷。透過親身經歷，解說綠色和平進行海洋獨立調查成果、拯救海洋免於污染的方法，以及成立全球海洋公約的必要性。
                </Text>
              </Box>
            </Flex>
          </Box>

          <Box mt={"-30px"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
              <path
                fill="#DEECFF"
                fillOpacity="1"
                d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,229.3C672,245,768,235,864,202.7C960,171,1056,117,1152,96C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </Box>

          <Box bgColor="#DEECFF" px={6} mt={0}>
            <Box py={{ base: 4, sm: 10 }}>
              <Box boxShadow="xl" borderRadius="8px" bgColor="#FFF">
                <Flex
                  direction={{ base: "column", sm: "row" }}
                  justify="center"
                  align="center"
                  minWidth="0px"
                >
                  <Box
                    w={{ base: "100%", sm: "40%" }}
                    h={{ base: "240px", md: "480px" }}
                    pos="relative"
                  >
                    <Image
                      src={thumbnailThree}
                      borderTopRadius="8px"
                      d={{ base: "block", sm: "none" }}
                    />
                    <Center
                      d={{ base: "none", sm: "block" }}
                      bgImage={`url(${kellyProfile})`}
                      pos={{ base: "relative", sm: "absolute" }}
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      h="100%"
                      w="100%"
                      bgSize={"cover"}
                      bgPosition="center center"
                      borderLeftRadius="8px"
                    />
                  </Box>
                  <Box w={{ base: "100%", sm: "60%" }}>
                    <Stack direction="column" p={{ base: 4, sm: 8 }}>
                      <Box mb={{ base: 2, sm: 6 }}>
                        <Text variant="authorName">黃毓琪 Kelly</Text>                        
                      </Box>
                      <Text variant="paragraph">
                      來自臺灣的綠色和平全球海洋數位專案主任，曾於綠色和平臺北及香港辦公室工作。Kelly在2021年登上「彩虹勇士號」，與其他來自全球的24位行動者及船員在太平洋展開為期三個月的守護海洋任務。Kelly與團隊曾見證並阻止企業深海採礦測試，24小時輪流監察採礦機器，行動者更駕駛快艇到企業大船旁，抗議破壞海洋的活動。
                      </Text>
                      <Text variant="paragraph">
                      在這三個月中，Kelly亦穿越巴拿馬運河、駐守太平洋、遇見海豚、記錄採礦機墜海第一手消息⋯⋯日以繼夜地守護海洋，為推動成立海洋公約、杜絕海洋破壞而奮鬥。
                      </Text>
                    </Stack>
                  </Box>
                </Flex>
              </Box>
            </Box>
          </Box>
          <Box mt={0}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
              <path
                fill="#DEECFF"
                d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,53.3C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
              ></path>
            </svg>
          </Box>

          <Box pt={6} px={6}>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              ref={swiperRef}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                991: {
                  slidesPerView: 2,
                },
              }}
            >
              {thumbnailContent.map((d, i) => (
                <SwiperSlide key={i}>
                  <Box pos="relative" borderRadius="8px" flex="1">
                    <Image src={d.thumbnail} borderRadius="8px" />
                    <Text pt={2}>{d.content}</Text>
                    <Text as="span" fontSize="xs" mt={4}>
                      {d.credit}
                    </Text>
                  </Box>
                </SwiperSlide>
              ))}
              <Box align="right" justify="right" textAlign="right">
                <Flex direction="row" justifyContent="flex-end">
                  <Box
                    px={2}
                    opacity={0.6}
                    _hover={{ cursor: "pointer", opacity: 1 }}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                  >
                    <HiArrowNarrowLeft fontSize={24} />
                  </Box>
                  <Box
                    px={2}
                    opacity={0.6}
                    _hover={{ cursor: "pointer", opacity: 1 }}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                  >
                    <HiArrowNarrowRight fontSize={24} />
                  </Box>
                </Flex>
              </Box>
            </Swiper>
          </Box>

          <Box pb={12} px={6}>
            <Divider my={{ base: 8, lg: 10 }} />

            <Stack
              direction={{ base: "column", sm: "row" }}
              mt="4"
              spacing={{ base: 10 }}
            >
              <Box flex="1" minWidth="0px">
                <SimpleCarousel
                  swiperData={simpleSwiperData}
                  style={{ borderRadius: "8px" }}
                />
              </Box>
              <Stack spacing={4} flex="1">
                <Heading
                  as="h2"
                  size="lg"
                  color="brand.500"
                  style={{ lineHeight: "1.5" }}
                >
                  守護全球
                  <br />
                  急需您的支持！
                </Heading>
                <Text variant="paragraph">
                  此刻，全球公海只有約1%受保護，要有效管制破壞海洋的行為，以保護、維持、復育海洋。
                  <br /><br />
                  綠色和平急需您的支持，<b>爭取訂立「全球海洋公約」</b>，大步邁向擴展全球海洋保護區至30%的目標。
                  <br /><br />
                  <b>懇請您在這關鍵時刻伸出援手，小額捐款支持綠色和平守護海洋的工作！</b>                  
                </Text>
                <Text variant="paragraph" color="#66cc00">
                  <b>※活動限定：現在只要每月定期捐款 $600（含）以上，即可獲得綠色和平船艦彩虹勇士號徵章一枚！</b>
                </Text>
                <Link
                  href="https://supporter.ea.greenpeace.org/tw/s/donate?campaign=oceans2&ref=2021-oceansday-webinar"
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
                <Text variant="paragraph">
                為了維持公正性和獨立性，綠色和平成立以來不接受任何政府、企業或政治團體的資助，以保持100%公正獨立，而您的定期資助，將持續地支持我們的工作，讓我們改善環境的工作和計劃得以長遠實行。
                </Text>
              </Stack>
            </Stack>
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
