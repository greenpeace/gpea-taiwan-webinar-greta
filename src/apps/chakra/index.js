import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ChakraProvider, Grid, GridItem, Box, Image, HStack, VStack, Flex, Spacer, Center, Text, Square, Heading, CircularProgress, CircularProgressLabel, Badge, Button} from "@chakra-ui/react"
import { motion } from "framer-motion"
import Nav from './components/header/nav'
import ContentForm from './components/form/contentForm'
import Banner from './components/hero/banner'
import Content from './components/feature/content'
import Tab from './components/tab'
import Footer from './components/footer'
import SwiperCore, {
  Navigation,
  Mousewheel,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
  const leftCols = 10
  const rightCols = 5

  return (
    <ChakraProvider>
      <Nav/>

      <Grid
        h="80vh"
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(15, 1fr)"
        gap={1}
      >
        <GridItem pos="relative" rowSpan={7} colSpan={leftCols} bg="tomato">
          <Box pos="absolute" top="0" left="0" bottom="0" right="0" backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg')" bgSize="cover" backgroundPosition="center"/>
        </GridItem>
        <GridItem rowSpan={4} colSpan={rightCols} bg="papayawhip" pos="relative">
        <Swiper
        style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
      slidesPerView={1}
      autoplay
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
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
        <GridItem rowSpan={3} colSpan={rightCols} bg="papayawhip">

        <Flex color="white" h="100%">
          <Center bg="#2a93d5" w="100%">
          <Box maxW="32rem">
          {/* <Heading mb={4}>守護大嶼 堅守香港海洋最後一道防線</Heading> */}
          <Text fontSize="xl">
          填海選址鄰近海域具生態價值，或令海洋或陸地物種的棲息地<b>永久喪失。</b>
          {/* 我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢，全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，生態價值絕不應被刻意低估。 */}
          </Text>
                </Box>
          </Center>
        </Flex>

        </GridItem>
        <GridItem rowSpan={5} colSpan={7} bg="tomato">
        <Flex color="white" h="100%">
          <Center bg="green.500" w="100%">
          <Box maxW="48rem">
          <Heading mb={4}>守護大嶼 堅守香港海洋最後一道防線</Heading>
          <Text fontSize="xl">
          香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。
          </Text>
                </Box>
          </Center>
        </Flex>
        </GridItem>

        <GridItem rowSpan={5} colSpan={3}>
        <Flex color="white">
          <Center w="100%">
          <Box>
          <motion.div
    // animate={{ rotate: 360 }}
    // transition={{ duration: 2 }}
  ><Image src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/09/2d250815-dji_0394.jpg" /></motion.div>
          <Flex align="baseline" mt={2}>
          <Center w="100%" mt={0}>
            <Button w="100%" colorScheme="teal" height="60px" borderRadius="0" size="lg" variant="outline">立即聯署</Button>
          </Center>
          </Flex>
        </Box>

          </Center>
        </Flex>
        </GridItem>


        <GridItem pos="relative" rowSpan={2} colSpan={rightCols} bg="papayawhip">
        <Box pos="absolute" top="0" left="0" bottom="0" right="0" backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/brownfield.71dd71ae.jpg')" bgSize="cover" backgroundPosition="center">

        <Flex color="white" h="100%">
          {/* <Center w="100%">
          <Box maxW="32rem">
            <Heading mb={4}>守護香港未來</Heading>
          </Box>
          </Center> */}
        </Flex>

        </Box>
        </GridItem>
        <GridItem rowSpan={3} colSpan={rightCols}>
        <Flex h="100%">
          <Center w="100%">
          <HStack pacing={8}>
          <Box borderWidth="0px" borderRightWidth="1px" pr={{ base: 4 }} d="flex" alignItems="center" textAlign="center" fontWeight="normal">
              <Text fontSize="2xl">
              已聯署人數
            </Text>
            </Box>
            <Box pr={2}>
            <CircularProgress size="90px" value={40} color="green.400" thickness="3px">
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
        {/* <GridItem rowSpan={2} bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" /> */}
      </Grid>
      {/* <Banner/> */}
      {/* <Tab/> */}
      <Footer/>
      {/* <ContentForm/> */}
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
