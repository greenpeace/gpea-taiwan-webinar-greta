import "swiper/swiper.scss";
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
  Link,
  useColorModeValue,
  SimpleGrid,
  Stack,
  Icon,
  Center,
} from "@chakra-ui/react";
import SEO from "./SEO";
import Nav from "./components/header/nav";
import Countdown from "./components/feature/countdown";
import ContentSwiper from "./components/feature/swiperContent";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "./theme.js";
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
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
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
        <Box className="wrap" flex="1" style={{ minWidth: "0px" }}>
          {/*
          {submitted ? (
            !isMobile ? (
              <ContentSwiper />
            ) : (
              <Image
                src={
                  process.env.PUBLIC_URL +
                  "/events/biodiversity/Artboard-1_2-BD-webinar-final-tinypng.jpg"
                }
              />
            )
          ) : (
            <Image
              src={
                process.env.PUBLIC_URL +
                "/events/biodiversity/Artboard-1_2-BD-webinar-final-tinypng.jpg"
              }
            />
          )}
            */}

          <Image
            src={
              process.env.PUBLIC_URL +
              "/events/biodiversity/Artboard-1_2-BD-webinar-final-tinypng.jpg"
            }
          />

          <Box p={{ base: 4, sm: 10 }} mt="4">
            <Stack pb={4}>
              <Box>
                <Text
                  as="h1"
                  fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                  fontWeight="bold"
                  color="gray.900"
                  lineHeight={1.2}
                >
                  <Text color="brand.500">立即登記</Text>
                  與生態專家探索香港「野」網上教室
                </Text>
              </Box>
            </Stack>
            <Box mb={4} className="countdown-box">
              <Text {...pStyle}>
                <Countdown />
              </Text>
            </Box>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1">
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
                    text={"日期：2021年5月22日（星期六）"}
                  />
                  <Feature
                    icon={
                      <Icon as={IoTimeSharp} color={"yellow.500"} w={5} h={5} />
                    }
                    iconBg={useColorModeValue("yellow.100", "yellow.900")}
                    text={"時間：下午2時半至3時半"}
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
                {/*
                <Box d={{ base: "block", sm: "none" }} pt={12} pb={2}>
                  <Flex {...flexBoxStyle} p={3}>
                    <Image
                      src={
                        "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/6389a5bc-vlcsnap-2021-04-23-16h48m08s619.jpg"
                      }
                      borderRadius="8px"
                    />
                  </Flex>
                </Box>
                <Box d={{ base: "block", sm: "none" }} pt={12} pb={2}>
                  <Flex {...flexBoxStyle} p={3}>
                    <Image
                      src={
                        "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/3feb5562-vlcsnap-2021-04-23-16h49m12s648.jpg"
                      }
                      borderRadius="8px"
                    />
                  </Flex>
                </Box>
                    */}
                <Text {...pStyle}>
                  香港的自然環境蘊含豐富生物多樣性，本地海洋、山林和郊野公園養育的物種繁多，我們的家園同樣是動植物的重要生境。然而，寶貴的生物與大自然正面臨威脅，例如明日大嶼填海工程、開發郊野公園等計劃，均會破壞海洋與陸上野生生物的生存環境。
                </Text>
                <Text {...pStyle}>
                  適逢國際生物多樣性日，綠色和平邀請到環境教育及生態研究學者馬昀祺博士與本地生態攝影師馮漢城，與大家探索香港「野」，帶領你認識香港獨特物種與生境，如盧氏小樹蛙、馬蹄蟹的特性，製作生態紀錄片的挑戰與趣事，並分享許多珍貴的生態攝影作品。另外，兩位也會由環境教育、政策、保育行動、個人習慣等角度出發，談談生態正面臨甚麼危機，填海、興建人工島對環境的禍害，並為我們提供守護香港「野」的方法。
                </Text>
              </Box>
            </Flex>

            <Box mt={{ base: 12 }} d={{ base: "none", sm: "block" }}>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  <Stack>
                    <Flex {...flexBoxStyle}>
                      <Image
                        src={
                          "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/6389a5bc-vlcsnap-2021-04-23-16h48m08s619.jpg"
                        }
                        borderRadius="8px"
                      />
                    </Flex>
                  </Stack>
                  <Stack>
                    <Flex {...flexBoxStyle}>
                      <Image
                        src={
                          "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/3feb5562-vlcsnap-2021-04-23-16h49m12s648.jpg"
                        }
                        borderRadius="8px"
                      />
                    </Flex>
                  </Stack>
                </SimpleGrid>
              </Box>
            </Box>
          </Box>

          <Divider my={{ base: 8, lg: 10 }} />

          <Box p={{ base: 4, sm: 10 }}>
            <Flex justifyContent="space-between" direction={{ base: "column" }}>
              <Box>
                <Flex direction={{ base: "column", xl: "row" }}>
                  <Box maxW={{ base: "100%" }}>
                    <Image
                      src={
                        "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/92b5573a-drxonima_pic-1-2.jpg"
                      }
                      borderRadius="8px"
                      w="100%"
                    />
                  </Box>
                  <Box align="center">
                    <Center h="100%">
                      <Box
                        bgColor="#FFF"
                        borderRadius="8px"
                        p={6}
                        ml={{ base: "0px", xl: "-110px" }}
                        mt={{ base: "-80px", xl: "0px" }}
                        w={{ base: "230px" }}
                      >
                        <Box
                          maxW="120px"
                          borderColor="brand.600"
                          borderWidth="1px"
                          borderRadius="full"
                          overflow="hidden"
                          mb="6"
                        >
                          <Image
                            src={`${process.env.PUBLIC_URL}/events/biodiversity/ma_2x.png`}
                          />
                        </Box>
                        <Heading
                          fontSize={{ base: "md", xl: "2xl" }}
                          color="brand.600"
                          mb="2"
                        >
                          馬昀祺博士
                          <br />
                          Dr. Xoni Ma
                        </Heading>
                        <Text size="sm" color="gray.500">
                          自然教育家
                        </Text>
                      </Box>
                    </Center>
                  </Box>
                </Flex>
              </Box>

              <Box flex="1" px={{ base: 0 }}>
                <Center h="100%">
                  <Text {...pStyle} mt={4} pr={{ base: 0, xl: "30px" }}>
                    香港少數本地環境教育及生態研究學者、香港戶外生態教育協會創辦人及教育總監，同時為國際樹木學會註冊樹藝師。Dr.
                    Xoni
                    Ma曾參與多項本地植物調查及森林群落研究，以及生物多樣性教育項目，主講講座如《香港林地與植被》等。多年來，Dr.
                    Xoni Ma
                    亦熱心推動本港的環境教育，參與設計多套學科和環境教育戶外考察教材，亦曾多次帶領教師培訓和學生考察活動，包括到訪肯亞、坦桑尼亞及馬達加斯加。
                  </Text>
                </Center>
              </Box>
            </Flex>
          </Box>

          <Divider my={{ base: 8, lg: 10 }} />

          <Box p={{ base: 4, sm: 10 }}>
            <Flex justifyContent="space-between" direction={{ base: "column" }}>
              <Box>
                <Flex direction={{ base: "column", xl: "row" }}>
                  <Box maxW={{ base: "100%" }}>
                    <Image
                      src={`${process.env.PUBLIC_URL}/events/biodiversity/Pic2-tinypng.jpg`}
                      borderRadius="8px"
                    />
                  </Box>
                  <Box align="center">
                    <Center h="100%">
                      <Box
                        bgColor="#FFF"
                        borderRadius="8px"
                        p={6}
                        ml={{ base: "0px", xl: "-110px" }}
                        mt={{ base: "-80px", xl: "0px" }}
                        w={{ base: "230px" }}
                      >
                        <Box
                          maxW="120px"
                          borderColor="brand.600"
                          borderWidth="1px"
                          borderRadius="full"
                          overflow="hidden"
                          mb="6"
                        >
                          <Image
                            src={`${process.env.PUBLIC_URL}/events/biodiversity/shing_2x.png`}
                          />
                        </Box>
                        <Heading
                          fontSize={{ base: "md", xl: "2xl" }}
                          color="brand.600"
                          mb="2"
                        >
                          馮漢城（阿城）
                        </Heading>
                        <Text size="sm" color="gray.500">
                          本地生態攝影師
                        </Text>
                      </Box>
                    </Center>
                  </Box>
                </Flex>
              </Box>

              <Box flex="1" px={{ base: 0 }}>
                <Center h="100%">
                  <Text {...pStyle} mt={4} pr={{ base: 0, xl: "15px" }}>
                    生態攝影師、《Wild Hong
                    Kong》系列生態紀錄片製作人，該系列被譽為「港版Discovery
                    Channel」，他亦曾拍攝與編導香港電台本地生態紀錄片節目《大自然大不同》第二季單元。阿城鏡頭下的野生動物包括灰背燕尾、香港鬥魚、和尚蟹等等，向大眾呈現各類物種的習性、捕食過程等。阿城希望用影像的力量，重新聯繫人類與大自然，紀錄動物們活著的美好一面。
                  </Text>
                </Center>
              </Box>

              <Divider my={{ base: 8, lg: 10 }} />

              <SimpleGrid mt="4" columns={{ base: 1, xl: 2 }} spacing={10}>
                <Flex direction="column">
                  <Image
                    borderRadius="8px"
                    src={
                      "https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/05/0f48c407-gif_reg_ty_page.gif"
                    }
                  />
                </Flex>
                <Stack spacing={4}>
                  <Heading
                    as="h2"
                    size="lg"
                    color="brand.500"
                    style={{ lineHeight: "1.5" }}
                  >
                    一起守護
                    <br />
                    香港珍貴的自然資源！
                  </Heading>
                  <Text {...pStyle}>
                    在高樓與繁忙都市之外，香港蘊含著豐富的生物多樣性，自然山野與遼闊海岸是眾多野生生物的居所。
                  </Text>
                  <Text {...pStyle}>
                    請支持綠色和平以科學角度、調查研究及行動，奮力守護大嶼及保衛郊野，守護香港珍貴的自然資源，為下一代建設宜居的生活環境！
                  </Text>
                  <Link href="https://supporter.ea.greenpeace.org/hk/s/donate/donation-new?language=zh_HK&campaign=biodiversity&utm_campaign=biodiversity">
                    <Button
                      mt="2"
                      color="#FFF"
                      bg="brand.500"
                      _hover={{ bg: "brand.400" }}
                      borderRadius="4px"
                      fontSize="md"
                      letterSpacing={2}
                    >
                      立即捐助
                    </Button>
                  </Link>
                  <Text {...pStyle}>
                    綠色和平成立50年，從不接受政商界捐助，在環境工作上維持公正獨立！
                  </Text>
                </Stack>
              </SimpleGrid>

              {/** Desktop */}

              {/* <Box d={{base: 'none', xl: 'block'}}>
              <Flex direction={{base: 'column', xl: 'row'}}>
                <Box align="center">
                  <Center h="100%">
                    <Box bgColor="#FFF" borderRadius="8px" p={6} mr={{base: '0px', xl: '-70px'}} mt={{base: '-80px', xl: '0px'}} w={{base: "230px"}} zIndex={10}>
                      <Box
                        maxW="120px"
                        borderColor="brand.600"
                        borderWidth="1px"
                        borderRadius="full"
                        overflow="hidden"
                        mb="6"
                      >
                        <Image src={`${process.env.PUBLIC_URL}/events/biodiversity/shing_2x.png`}/>
                      </Box>
                      <Heading
                        fontSize={{ base: "md", xl: "2xl" }}
                        color="brand.600"
                        mb="2"
                      >
                        馮漢城（阿城）
                      </Heading>
                      <Text size="sm" color="gray.500">
                        本地生態攝影師
                      </Text>
                    </Box>
                  </Center>
                </Box>
                <Box maxW={{base: "100%", sm: "400px", xl: "600px"}} zIndex={9} align="center">
                  <Image src={`${process.env.PUBLIC_URL}/events/biodiversity/Pic2-tinypng.jpg`} borderRadius="8px"/>
                </Box>
              </Flex>
            </Box> */}
            </Flex>
          </Box>
        </Box>
        <Box
          w={{ base: 0, md: "440px", lg: "500px" }}
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
          borderRadius="24px"
          fontSize="xl"
          letterSpacing={4}
          style={{ zIndex: 999 }}
          onClick={() => togglePanel(true)}
        >
          {content.submit_text}
        </Button>
      </Box>
      <Panel formContent={content}>
        {submitted && isMobile && <ContentSwiper />}
      </Panel>
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
