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
} from "@chakra-ui/react";
import SEO from "../SEO";
import content from "../data/content";
import Nav from "../components/header/nav";
import HeroSwiper from "../components/feature/heroSwiper";
import Footer from "../components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../../../theme";

import banner from "../assets/images/73.jpg";
import subImage from "../assets/images/wallpaper_removed.jpg";

const Landing = ({ submitted, togglePanel }) => {
  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });
  const pStyle = {
    as: "p",
    marginTop: "20px",
    color: "gray.900",
    lineHeight: "1.7",
    fontSize: "16px",
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO />
      {/*}
      {isMobile && <Nav />}
  */}
      <Nav showButton={false} />
      <Flex>
        <Box className="wrap" flex="1" style={{ minWidth: "0px" }}>
          <Box px="4" py={{ base: 4, md: 8 }}>
            <Box mb={6}>
              {!submitted && <Image src={banner} borderRadius="8px" />}
              {submitted && !isMobile && (
                <HeroSwiper isMobile={isMobile} swiperHeight="480px" />
              )}{" "}
              {/** Fixed swiper desktop version height, background image will keep ratio and center center position */}
            </Box>
            <Stack pb={4}>
              <Box>
                <Text
                  as="h1"
                  fontSize={{ base: "2xl", sm: "3xl", xl: "4xl" }}
                  fontWeight="bold"
                  color="gray.900"
                  lineHeight={1.2}
                >
                  <Text color="brand.500" mt={4} mb={2}>
                    精選香港動物奇妙時刻
                  </Text>
                  桌布 / 視像會議 Wallpaper 大放送
                </Text>
              </Box>
            </Stack>
            <Flex direction={{ base: "column", sm: "row" }}>
              <Box flex="1">
                <Text {...pStyle}>
                  綠色和平邀請本地著名生態攝影師馮漢城，上山下水為大家拍下一些展現香港生命力的時刻，大家增進了解這些「角落生物」之餘，也讓我們一起認識孕育這些珍貴生物的土地，一起好好守護香港「野」。
                </Text>
                <Image borderRadius="8px" marginTop="8" src={subImage} />
                <Text {...pStyle}>
                  然而，這些生活在我們身邊的珍貴生物卻正面對各種環境問題威脅，從明日大嶼前期研究撥款通過有機會隨之而來的大興土木，到郊野公園面臨的開發威脅，不論海洋還是郊野遭受破壞，香港野生動物均不能倖免於難。
                </Text>
                <Text {...pStyle}>
                  這些生物為香港這個山水相鄰的小城市注入能量，要留住這些寫真中的奇妙時刻，需要您我一同守護美麗的大自然景色、維持香港生物多樣性，請支持綠色和平以科學角度調查、研究及行動，守護大嶼及保衛郊野，為下一代建設宜居的香港！
                </Text>
              </Box>
            </Flex>

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
              p="6"
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
                  birthDate={false}
                  thanksScreen={true}
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
        birthDate={false}
      >
        {submitted && isMobile && (
          <HeroSwiper isMobile={isMobile} swiperHeight="480px" />
        )}
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
