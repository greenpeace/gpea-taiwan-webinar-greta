import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ChakraProvider, Grid, GridItem, Box, Image, HStack, VStack, Flex, Spacer, Center, Text, Square, Heading } from "@chakra-ui/react"

import Nav from './components/header/nav'
import ContentForm from './components/form/contentForm'
import Banner from './components/hero/banner'
import Content from './components/feature/content'
import Tab from './components/tab'
import Footer from './components/footer'

const Index = ({ initState, fakeSubmit, submitted, petition }) => {
  const leftCols = 7
  const rightCols = 4
  return (
    <ChakraProvider>
      <Nav/>

      <Grid
        h="80vh"
        templateRows="repeat(11, 1fr)"
        templateColumns="repeat(11, 1fr)"
        gap={1}
      >
        <GridItem pos="relative" rowSpan={7} colSpan={leftCols} bg="tomato">
          <Box pos="absolute" top="0" left="0" bottom="0" right="0" backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg')" bgSize="cover"/>
        </GridItem>
        <GridItem rowSpan={4} colSpan={rightCols} bg="papayawhip" />
        <GridItem rowSpan={3} colSpan={rightCols} bg="papayawhip" />
        <GridItem rowSpan={5} colSpan={leftCols} bg="tomato">
        <Flex color="white" h="100%">
          <Center bg="green.500" w="100%">
          <Box maxW="64rem">
          <Heading mb={4}>守護大嶼 堅守香港海洋最後一道防線</Heading>
          <Text fontSize="xl">
          香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。
          </Text>
                </Box>
          </Center>
        </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={rightCols} bg="papayawhip" />
        <GridItem rowSpan={3} colSpan={rightCols} bg="papayawhip" />
        {/* <GridItem rowSpan={2} bg="papayawhip" />
        <GridItem bg="papayawhip" />
        <GridItem bg="tomato" /> */}
      </Grid>




      
      <Banner/>
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
