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
  VStack,
  Button,
  useColorModeValue,
  Container,
  Spacer
} from "@chakra-ui/react";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import Sticky from 'react-sticky-el';
import themeConfig from "./theme.js"

import { images, otherImages } from "./components/parallex/images";
import ParallaxImage from './components/parallex/parallexImages'

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import SwiperCore, {
  Mousewheel,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

SwiperCore.use([Scrollbar, A11y, Autoplay, Mousewheel]);

const Index = ({ initState, fakeSubmit, submitted, petition, togglePanel }) => {

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <ChakraProvider theme={themeConfig}>
      <Box pos="absolute" w={120} h={90} zIndex={9} bgColor="rgba(0,0,0,.09)" p={3} pt={7}>
        <Center><Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" /></Center>
      </Box>
      <Grid
        h={{ base: 400, sm: '90vh'}}
        minHeight={{ base: 400, sm: '960px'}}
        templateRows={{ base: 'repeat(7, 1fr)', sm: 'repeat(11, 1fr)'}}
        templateColumns="repeat(15, 1fr)"
      >
        <GridItem pos="relative" d={{ base: 'none', sm: 'block' }} rowSpan={{ base: 4, sm: 9 }} colSpan={{ base: 15, sm: 10 }}>
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
        <GridItem rowSpan={{ base: 3, sm: 2 }} colSpan={{ base: 15, sm: 5 }} pos="relative">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 5000
            }}
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
        <GridItem d={{ base: 'none', sm: 'block' }} rowSpan={{ base: 8, sm: 9 }} colSpan={{ base: 15, sm: 5 }}>
          <Center h="100%" pl={10} pr={10} name="test1" className="element">
            {submitted ? <NewFrameSubmittedForm/> : <NewFrameForm />}
          </Center>
        </GridItem>
        <GridItem 
          rowSpan={{ base: 3, sm: 4 }} 
          colSpan={{ base: 15, sm: 10 }}
          bg="tomato">
          <Flex color="white" h="100%">
            <Center bg="green.500" w="100%">
              <Box maxW="64rem" py={5} px={10}>
                <Heading fontSize={{ base: 'xl', sm: '3xl' }} mb={4}>守護大嶼</Heading>
                <Text fontSize={{ base: 'md', sm: 'xl' }} lineHeight={1.8}>
                  香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。
                </Text>
              </Box>
            </Center>
          </Flex>
        </GridItem>
      </Grid>

      <Sticky stickyStyle={{zIndex: 10}}>
      <Box className="sticky-box" mb={{base: 8}} pt={{base: 2}} pb={{base: 2}} borderTop="1px" borderBottom="1px" borderColor="gray.100" backgroundColor='rgba(255,255,255,0.8)'>
      <Container maxW={'8xl'} pb={1}>
      <Flex>
        <Box p={5}>
          <Image maxW="200px" objectFit="contain" src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"/>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(0)}>
          <Button colorScheme="teal" variant="link">內容</Button>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(1)}>
        <Button colorScheme="teal" variant="link">常見問題</Button>
        </Box>
        <Box p={5} onClick={()=>setCurrentTab(2)}>
          <Button colorScheme="teal" variant="link">其他資料</Button>
        </Box>
        <Spacer />
        <Box p="1">
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}>
        <Button
            w="100%"
            colorScheme="teal"
            height="50px"
            borderRadius="0"
            size="lg"
            variant="outline"
          >
            立即聯署
          </Button>
          </Link>
        </Box>
      </Flex>
      </Container>
      </Box>
      </Sticky>


      <Box bg={useColorModeValue('gray.50', 'gray.900')} pt={60} pb={30}>
        <Center>
          <VStack maxWidth={'3xl'}>
            <Heading mb={8}>堅守香港海洋最後一道防線</Heading>
            <Text fontSize={{ base: 18 }} lineHeight={1.8}>
              政府強推「明日大嶼」，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態；它亦是香港史上最昂貴的基建，造價至少6,240億元，不但可能於10年內（2031 - 32年度）耗盡香港的財政儲備，亦無法有效解決香港逼在眉睫的房屋問題。雖然財委會強行通過了「明日大嶼」5.5億元前期研究撥款，但距離真正落實填海工程仍有極多變數，綠色和平絕不會放棄「堅守大嶼」。
            </Text>
          </VStack>
        </Center>
        {
          otherImages.map(image => (
        <ParallaxImage key={image.src} {...image} />
      ))}

      <Container maxWidth={'8xl'} pt={8} style={{overflow: 'hidden'}}>
      <Flex>

      <Box p="4" w={980}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg" />
        <Box pt={6}>
          <Text>事實上，香港有比「明日大嶼」更明智的選項：綠色和平調查發現，發展棕地造價僅333億元卻可興建近14萬伙公營房屋。</Text>
        </Box>
      </Box>
      <Spacer/>

      <Box mt={480} p="4" w={480}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/close-up_WBSE_Kevin_Lok.c5c8bcfc.jpg" />
        <Box pt={6}>
        <Text>
        海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！
        </Text>
        </Box>
      </Box>
      </Flex>

      </Container>

      </Box>

      <Box pt={60} pb={30} mt={-40}>
        <Center>
          <VStack maxWidth={'3xl'}>
            <Heading>「明日」的生態威脅</Heading>
            <Text fontSize={{ base: 18 }} lineHeight={1.8}>
            鄰近填海選址海域 具生態價值 生態價值 絕不應被刻意低估
            </Text>
          </VStack>
        </Center>

        {
        images.map(image => (
        <ParallaxImage key={image.src} {...image} />
      ))}

        <Container maxWidth={'8xl'} pt={8} style={{overflow: 'hidden'}}>
      <Flex>

      <Box mt={480} p="4" w={480}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/hk-brownfield.9533d1d7.jpg" />
        <Box pt={6}>
        <Text>
        海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！
        </Text>
        </Box>
      </Box>

      <Box p="4" w={980}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg" />
        <Box pt={6}>
          <Text>事實上，香港有比「明日大嶼」更明智的選項：綠色和平調查發現，發展棕地造價僅333億元卻可興建近14萬伙公營房屋。</Text>
        </Box>
      </Box>
      <Spacer/>
      </Flex>

      </Container>

      </Box>

      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={40}>
        <Container maxWidth={'8xl'} pt={8} style={{overflow: 'hidden'}}>
      <Flex>

      <Box mt={120} w={720} mr={-180} style={{zIndex: 999}}>
        <Box p={6} bgColor="#FFF">
        <Center mb={50}>
          <VStack maxWidth={'3xl'}>
            <Heading>史上最貴基建</Heading>
            <Text fontSize={{ base: 18 }} lineHeight={1.8}>
            耗時至少 13年 耗費至少 6,240億公帑
            </Text>
          </VStack>
        </Center>
        <Text>現時輪候公屋年期為5.5年，逾20萬劏房戶等上樓，惟填海預料至少在13年後 - 2032年才能讓市民入伙，無法紓緩燃眉之急，甚至要「邊住邊填海」，居住環境堪憂。</Text>
        <Text>「明日大嶼」耗費至少6,240億元公帑，工程延期超支仍未計算在內，令人擔憂將耗盡香港的財政儲備。</Text>
        </Box>
      </Box>

      <Box p="4" w={860}>
      <Swiper slidesPerView={1} autoplay={{ delay: 5000}}>
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
      <Flex>

      <Box w={860} h={720} pos="relative" py={40}>
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
      <Box style={{zIndex: 999}} p={6} bgColor="#FFF" width="100%">
          <Center mb={50}>
          <VStack maxWidth={'2xl'}>
          <Heading>我們有更明智的選擇</Heading>
          <Text fontSize={{ base: 18 }} lineHeight={1.8}>
            發展棕地成本比填海便宜8成 即可興建14萬伙公營房屋
          </Text>
          <br/><br/>
          <Box>
            <Text>事實上，香港有比「明日大嶼」更明智的選項：發展408公頃的棕地，造地成本估算為333億元。<br/>「除了比填海便宜8成以外，政府亦可引用《收回土地條例》，以比填海更快的速度，興建近14萬伙公營房屋 ，並取締棕地上的違法及違規作業。</Text>
          </Box>
          <br/><br/>
          <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500}><Button
            w="120"
            colorScheme="teal"
            height="50px"
            borderRadius="0"
            size="lg"
            variant="outline"
          >
            立即聯署
          </Button>
          </Link>
          </VStack>
        </Center> 
          </Box>
      </Center>

      </Flex>
      </Box>

      <Button
        d={{base: 'block', sm: 'none'}}
        w="100%"
        // isLoading={isSubmitting}
        colorScheme="teal"
        height="60px"
        borderRadius="0"
        size="lg"
        pos="fixed"
        bottom={0}
        zIndex={9}
        onClick={()=>togglePanel(true)}
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
