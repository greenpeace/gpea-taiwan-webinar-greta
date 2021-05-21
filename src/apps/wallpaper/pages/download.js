import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "react-responsive";
import Sticky from "react-sticky-el";
import {
  ChakraProvider,
  Box,
  Button,
  Image,
  Text,
  Heading,
  Link,
  SimpleGrid,
  Center,
  VStack,
  HStack,
} from "@chakra-ui/react";
import Nav from "../components/header/nav";
import Footer from "../components/footer";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "../theme.js";
import { animateScroll as scroll, scroller } from "react-scroll";
import { DownloadIcon } from "@chakra-ui/icons";

import LazyLoad from "react-lazyload";

import wallpaper from "../../../data/wallpaper.json";

import "../index.css";

const Index = ({ submitted, togglePanel, selectedImage }) => {
  const [Arctic, setArctic] = useState([]);
  const [Forests, setForests] = useState([]);
  const [Oceans, setOceans] = useState([]);
  const [current, setCurrent] = useState([]);
  const [displayCate, setDisplayCate] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [download, setDownload] = useState(
    wallpaper.data[3].content.wallpaperList[0]
  );
  const campaignButton = [
    { label_zh: "北極", label: "Arctic", value: Arctic },
    { label_zh: "森林", label: "Forests", value: Forests },
    { label_zh: "海洋", label: "Oceans", value: Oceans },
  ];

  const isMobile = useMediaQuery({ query: "(max-device-width: 564px)" });

  const scrollTo = (d) => {
    scroller.scrollTo(d, {
      duration: 800,
      delay: 0,
      smooth: true,
      offset: -200, // TODO: Need double check the value
    });
  };

  const handleSwitchDownload = (cate) => {
    console.log("clicked", cate);
    const getFirstItem = cate.content?.wallpaperList[0];
    setDownload(getFirstItem);
    selectedImage(getFirstItem);
    setCurrent(cate);
  };

  const handleSetDownload = (d) => {
    setDownload(d);
    selectedImage(d);
    scrollTo(d);
  };

  const whatsAppShare = () => {
    var w = "https://act.gp/39fBmX6";
    window.open(w);
  };
  const mainShare = () => {
    // WEB SHARE API
    if (navigator.share) {
      navigator
        .share({
          title: "",
          text:
            "精選香港動物奇妙時刻：桌布 / 視像會議寫真大放送！立即免費下載！👉 ",
          url: "https://act.gp/2YaXfQW",
        })
        .then()
        .catch();
    } else {
      whatsAppShare();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setArctic(wallpaper.data.find((d) => d.issue === "Biodiversity"));
    setForests(wallpaper.data.find((d) => d.issue === "Forests"));
    setOceans(wallpaper.data.find((d) => d.issue === "Oceans"));
  }, []);

  useEffect(() => {
    const getFirstItem = Arctic.content?.wallpaperList[0];
    setCurrent(Arctic);
    selectedImage(getFirstItem);
  }, [Arctic]);

  const downloadButtonStyle = {
    top: "0px",
    left: "0px",
    borderTop: "80px solid #66cc00",
    borderRight: "80px solid transparent",
  };

  const mobileDownloadButtonStyle = {
    top: "0px",
    left: "0px",
    borderTop: "48px solid #66cc00",
    borderRight: "48px solid transparent",
  };

  const SelectButtonStyle = {
    variant: "outline",
    fontWeight: 700,
    color: "brand.600",
    borderColor: "brand.600",
    _hover: {
      color: "#FFF",
      bgColor: "brand.600",
    },
    flex: "1",
    borderRadius: "20px",
  };

  const SelectedButtonStyle = {
    variant: "solid",
    fontWeight: 700,
    color: "#FFF",
    borderColor: "brand.600",
    bgColor: "brand.600",
    flex: "1",
    borderRadius: "20px",
  };

  return (
    <ChakraProvider theme={themeConfig}>
      <Nav showButton={false} />
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box flex="1" pt={10} px="4">
          <Heading size="xl" mb={8}>
            感謝您的登記！
          </Heading>
          <Text as="p" fontSize="md">
            您願意進一步行動，捐助支持綠色和平更多環境項目嗎？
          </Text>
          <Text as="p" fontSize="md">
            守護香港野！我們需要您的支持為環境堅持努力。
            <br />
            綠色和平不接受政府、企業捐款，請立刻加入我們的1%會員計畫，以您的1%收入，支持我們的100%財政獨立。
          </Text>
          <HStack align="center" pt="6" pb="4" spacing="4">
            <Link
              href="https://supporter.ea.greenpeace.org/hk/s/donate?language=zh_HK&ref=wallpaper-thankyou"
              isExternal
            >
              <Button backgroundColor="orange" color="white" px="10" py="4">
                捐助支持
              </Button>
            </Link>
            <Button
              backgroundColor="brand.500"
              color="white"
              px="10"
              py="4"
              onClick={() => mainShare()}
            >
              分享
            </Button>
          </HStack>
          <Sticky
            stickyClassName={"sticky-wallpaper-image"}
            z-index="99"
            onFixedToggle={() => setDisplayCate(!displayCate)}
          >
            <Heading size="lg" pt={4} mb={8}>
              點擊確認下載圖片
            </Heading>
            <Box
              pos="relative"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
              my={4}
            >
              <Link
                href={`${process.env.PUBLIC_URL}${download}`}
                download={download.split("/").pop()}
                isExternal
              >
                {isShown && (
                  <Box
                    pos="absolute"
                    top={0}
                    bottom={0}
                    left={0}
                    right={0}
                    bgColor="rgba(0, 0, 0, .25)"
                  >
                    <Center w="100%" h="100%">
                      <VStack>
                        <Text as="h3" color="#FFF">
                          <strong>點擊確認下載圖片</strong>
                        </Text>
                        <small style={{ color: "#FFF" }}>
                          * 如果下載程序沒有自動開始，請長按圖片並選擇下載圖片
                        </small>
                      </VStack>
                    </Center>
                  </Box>
                )}
                <Box pos="absolute" left="8px" top="8px" zIndex="1">
                  <DownloadIcon color="#FFF" w={8} h={8} />
                </Box>
                <Box pos="absolute" {...downloadButtonStyle}></Box>
                <LazyLoad height={200} once offset={100}>
                  <Image
                    className="fade-in"
                    src={`${process.env.PUBLIC_URL}${download}`}
                    w="100%"
                  />
                </LazyLoad>
              </Link>
            </Box>
          </Sticky>
          {/* Category navbar */}
          {/* <HStack mb={10}>
            {campaignButton.map((d) => (
              <Button
                key={d.label}
                {...SelectButtonStyle}
                bgColor={
                  current.issue === d.label
                    ? SelectedButtonStyle.bgColor
                    : SelectButtonStyle.bgColor
                }
                color={
                  current.issue === d.label
                    ? SelectedButtonStyle.color
                    : SelectButtonStyle.color
                }
                onClick={() => handleSwitchDownload(d.value)}
              >
                {d.label_zh}
              </Button>
            ))}
          </HStack> */}
        </Box>
        <Box flex="1" pt="10" pb="4" px="4">
          <Heading size="xl" mb={8}>
            揀選你喜愛的環境照片
          </Heading>
          {isMobile ? (
            <SimpleGrid columns={2} spacing="12px">
              {current.content?.wallpaperList.map((d, i) => (
                <Box
                  pos="relative"
                  key={i}
                  _hover={{ cursor: "pointer", opacity: 0.8 }}
                  onClick={() => handleSetDownload(d)}
                >
                  {/* <Link
                    href={`${process.env.PUBLIC_URL}${d}`}
                    download={d.split("/").pop()}
                  ></Link> */}
                  {/* <Box
                bgImage={`url(${process.env.PUBLIC_URL}${d})`}
                bgSize="cover"
                height={{base: "160px"}}
                _hover={{cursor: 'pointer', opacity: .8}}
                pos="relative"
              >
              <Box pos="absolute" bottom="6px" right="6px" zIndex={2}><DownloadIcon color="#FFF" w={4} h={4}/></Box>
              <Box pos="absolute" {...mobileDownloadButtonStyle} zIndex={1}></Box>
            </Box> */}
                  <LazyLoad height={240} once offset={100}>
                    {/* <Box pos="absolute" left="4px" top="4px">
                      <DownloadIcon color="#FFF" w={4} h={4} />
                    </Box>
                    <Box pos="absolute" {...mobileDownloadButtonStyle}></Box>
                    */}
                    <Image src={`${process.env.PUBLIC_URL}${d}`} />
                  </LazyLoad>
                </Box>
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid minChildWidth="180px" spacing="20px">
              {current.content?.wallpaperList.map((d, i) => (
                <Box
                  name={d}
                  key={i}
                  bgImage={`url(${process.env.PUBLIC_URL}${d})`}
                  bgSize="cover"
                  height={{ base: "240px", sm: "180px" }}
                  _hover={{ cursor: "pointer", opacity: 0.8 }}
                  onClick={() => handleSetDownload(d)}
                ></Box>
              ))}
            </SimpleGrid>
          )}
          <Text
            mt="4"
            px="4"
            py="10"
            fontSize="md"
            align="center"
            color="gray.500"
          >
            - 持續更新中 -
          </Text>
        </Box>
      </SimpleGrid>
      <Footer />
    </ChakraProvider>
  );
};

const mapStateToProps = ({ theme }) => {
  return {
    theme: theme,
    submitted: theme.lastAction === themeActions.SUBMIT_FORM_SUCCESS,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
    selectedImage: (src) => {
      dispatch({ type: themeActions.SWITCH_SELECTED_IMAGE, src });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
