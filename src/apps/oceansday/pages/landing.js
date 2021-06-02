import "swiper/swiper.scss";
import React from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
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
  SimpleGrid,
  Stack,
  Center,
} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import Footer from "../components/footer";
import Webinar from "components/sections/webinar";
import NewFrameForm from "components/form/newFrameForm";
import DonateForm from "components/form/donateForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../../../theme";

import banner from "../assets/images/hero.jpg";
import thumbnail from "../assets/images/GP0STUTFE_Medium_res.jpg";
import thumbnailTwo from "../assets/images/GP1SUZTO_Medium_res.jpg";
import thumbnailThree from "../assets/images/GP1SV4UD_High_res.jpg";
import avatar from "../assets/images/MD-GP-PORTRAITKELLYHUANG001.jpg";
import frBanner from "../assets/images/20210508_SSPHunting_17.jpg";

const Landing = ({ submitted, togglePanel }) => {
  const subHeadline = {
    color: "gray.700",
    fontSize: "sm",
    lineHeight: "1.5",
    mt: "10",
    mb: "4",
    pl: "2",
    borderLeft: "4px solid #00b474",
  };

  const pStyle = {
    as: "p",
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
  };

  const WebinarContent = {
    date: "日期：2021年6月19日（星期六）",
    time: "時間：下午2時半至3時半",
    description: "線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）",
    other: "注意事項：嘉賓將以普通話進行分享，主持人會以粵語輔助",
  };

  const thumbnailContent = [
    {
      thumbnail: thumbnail,
      content:
        "綠色和平團隊駕駛橡皮艇靠近巨大的採礦機器，舉起橫額與畫上「RISK」字眼抗議。",
    },
    {
      thumbnail: thumbnailTwo,
      content:
        "Kelly在航程中遇見野生海豚、吞拿魚、極度瀕危的欖蠵龜等海洋生物。",
    },
    {
      thumbnail: thumbnailThree,
      content:
        "Kelly與團隊24小時站崗，觀察採礦機器的一舉一動，揭露企業污染海洋的真相。",
    },
  ];

  // const [current, setCurrent] = useState();

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
              <Text {...subHeadline}>WEBINAR</Text>
              <Text
                as="h1"
                fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                fontWeight="bold"
                color="gray.900"
                lineHeight={1.2}
              >
                <Text color="brand.500" mb={2} maxWidth="780px">
                  直擊「彩虹勇士號」工作：三個月的海上任務
                </Text>
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1" style={{ minWidth: "0px" }}>
                <Divider my={{ base: 8 }} />

                <Webinar content={WebinarContent} />

                <Divider my={{ base: 8 }} />

                <Text {...subHeadline}>ABOUT</Text>

                <Text as="p" {...pStyle}>
                  綠色和平全球守護海洋專員黃毓琪Kelly在年頭登上「彩虹勇士號」船艦，任務地點極為偏遠，航行近三個月，見證並抗議太平洋深海採礦測試，更揭露GSR採礦機器墜海第一手消息，向世界說出企業破壞海洋生態的真相。
                </Text>

                <Text as="p" {...pStyle}>
                  綠色和平今次請來這位「海洋鬥士」和大家介紹「彩虹勇士號」，認識船艙與駕駛室，並了解綠色和平行動團隊的任務。Kelly將講述海洋行動實錄，分享公海環境實況，在太平洋遇上海豚等珍貴經歷。她亦會透過親身見證，解說綠色和平進行海洋獨立調查成果、拯救海洋免於污染的方法，以及成立全球海洋公約的必要性。
                </Text>
              </Box>
            </Flex>

            <Box py={{ base: 4, sm: 10 }}>
              <Flex
                justifyContent="space-between"
                direction={{ base: "column" }}
              >
                <Box>
                  <Flex direction={{ base: "column", xl: "row" }}>
                    <Box flex="1">
                      <Image src={thumbnailThree} borderRadius="8px" w="100%" />
                    </Box>
                    <Box align="center">
                      <Center h="100%">
                        <Box
                          bgColor="#FFF"
                          borderRadius="8px"
                          p={6}
                          ml={{ base: "0px", xl: "-110px" }}
                          mt={{ base: "-80px", xl: "0px" }}
                        >
                          <Heading
                            fontSize={{ base: "md", xl: "2xl" }}
                            color="brand.600"
                            mb="2"
                          >
                            黃毓琪 Kelly
                          </Heading>
                          <Text size="sm" color="gray.500">
                            守護海洋專員
                          </Text>
                        </Box>
                      </Center>
                    </Box>

                    <Box flex="1" px={{ base: 0 }}>
                      <Center h="100%">
                        <Text {...pStyle} mt={4} pr={{ base: 0, xl: "30px" }}>
                          來自台灣的綠色和平全球守護海洋專員，曾於綠色和平台北及香港辦公室工作。Kelly在2021年登上「彩虹勇士號」，與24位行動者、船員在太平洋展開為期三個月的守護海洋任務。Kelly與團隊曾見證並阻止企業深海採礦測試，24小時輪流監察採礦機器，行動者更駕駛快艇到企業巨輪旁，抗議破壞海洋的活動。在這三個月中，Kelly亦穿越巴拿馬運河、駐守太平洋、遇見海豚、記錄採礦機墜海第一手消息⋯⋯日以繼夜地守護海洋，為推動成立海洋公約、杜絕海洋破壞而奮鬥。
                        </Text>
                      </Center>
                    </Box>
                  </Flex>
                </Box>
              </Flex>

              {/* Album */}
              <Box py={8}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  spacing={12}
                  h={{ base: "1080px", sm: "360px" }}
                >
                  {thumbnailContent.map((d, i) => (
                    <Box
                      key={i}
                      pos="relative"
                      bgImage={`url(${d.thumbnail})`}
                      borderRadius="8px"
                      flex="1"
                      h="360px"
                      bgSize={"cover"}
                    >
                      <Box
                        pos="absolute"
                        bgColor="#FFF"
                        bottom={"20px"}
                        w="80%"
                        py={2}
                        borderTopRightRadius={"8px"}
                        borderBottomRightRadius={"8px"}
                      >
                        <Text>{d.content}</Text>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>

            <Box pb={12}>
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
                    守護全球
                    <br />
                    急需您的支持！
                  </Heading>
                  <Text {...pStyle}>
                    此刻，全球公海只有約1%受保護，要有效管制破壞海洋的行為，以保護、維持、復育海洋。
                    <br />
                    綠色和平急需您的支持，在今年爭取訂立「全球海洋公約」，大步邁向擴展全球海洋保護區至30%的目標。
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
    // submitted: true, // TEST submitted
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
