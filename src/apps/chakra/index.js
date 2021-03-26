import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
  HStack,
  CircularProgress,
  CircularProgressLabel
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Nav from "./components/header/nav";
import ContentForm from "./components/form/contentForm";
import Banner from "./components/hero/banner";
import Content from "./components/feature/content";
import Tab from "./components/tab";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import SwiperCore, {
  Navigation,
  Mousewheel,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const Index = ({ initState, fakeSubmit, submitted, petition }) => {

  return (
    <ChakraProvider>
      <Box pos="absolute" w={120} h={90} zIndex={9} bgColor="rgba(0,0,0,.09)" p={3} pt={7}>
        <Center><Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" /></Center>
      </Box>
      {/* <Nav /> */}
      <Grid
        h="90vh"
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(15, 1fr)"
        gap={1}
      >
        <GridItem pos="relative" d={{ base: 'none', sm: 'block' }} rowSpan={{ base: 4, sm: 7 }} colSpan={{ base: 15, sm: 10 }} bg="tomato">
          <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg')"
            bgSize="cover"
            backgroundPosition="center"
          />
        </GridItem>
        <GridItem rowSpan={{ base: 3, sm: 3 }} colSpan={{ base: 15, sm: 5 }} pos="relative">
          <Swiper
            slidesPerView={1}
            autoplay
            style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}
          >
            <SwiperSlide>
              <Box>
                <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg" />
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box>
                <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg" />
              </Box>
            </SwiperSlide>
          </Swiper>
        </GridItem>
        <GridItem rowSpan={{ base: 8, sm: 8 }} colSpan={{ base: 15, sm: 5 }}>
          <Center h="100%" pl={10} pr={10}>
            <NewFrameForm />
          </Center>
        </GridItem>
        <GridItem 
          rowSpan={{ base: 4, sm: 5 }} colSpan={{ base: 15, sm: 7 }}
          bg="tomato">
          <Flex color="white" h="100%">
            <Center bg="green.500" w="100%">
              <Box maxW="48rem" p={5}>
                <Heading fontSize={{ base: 'xl', sm: '3xl' }} mb={4}>守護大嶼 堅守香港海洋最後一道防線</Heading>
                <Text fontSize={{ base: 'md', sm: 'xl' }}>
                  香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。
                </Text>
              </Box>
            </Center>
          </Flex>
        </GridItem>

        <GridItem rowSpan={5} colSpan={3} bg="papayawhip">

        <Flex h="100%">
            <Center w="100%">
              <HStack pacing={8}>
                <Box
                  borderWidth="0px"
                  borderRightWidth="1px"
                  pr={{ base: 4 }}
                  d="flex"
                  alignItems="center"
                  textAlign="center"
                  fontWeight="normal"
                >
                  <Text fontSize="xl">已聯署人數</Text>
                </Box>
                <Box pr={2}>
                  <CircularProgress
                    size="90px"
                    value={40}
                    color="green.400"
                    thickness="3px"
                  >
                    <CircularProgressLabel>40%</CircularProgressLabel>
                  </CircularProgress>
                </Box>
                <Box>
                  <Heading as="h2" size="xl" color="primary.400">
                    134,000
                  </Heading>
                  <Text
                    fontSize="md"
                    mt={2}
                    textAlign="left"
                    color="primary.800"
                    opacity="0.6"
                  >
                    目標: 250,000
                  </Text>
                </Box>
              </HStack>
            </Center>
          </Flex> 

        </GridItem>
      </Grid>
      <Footer />
    </ChakraProvider>
  );
};

const mapStateToProps = ({ swiper, theme }) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
