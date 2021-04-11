import React from "react";
import { connect } from "react-redux";
import Sticky from 'react-sticky-el';
import content from './data/content'
import { ChakraProvider, Grid, GridItem, Box, Image, Flex, Center, Text, Heading, VStack, Button, useColorModeValue, Container, Spacer, Divider, SimpleGrid, Stack} from "@chakra-ui/react";
import SEO from "./seo";
import Footer from "./components/footer";
import NewFrameForm from "components/form/newFrameForm";
import NewFrameSubmittedForm from "components/form/newFrameSubmittedForm";
import Panel from "components/panel/newFormPanel";
import * as themeActions from "store/actions/action-types/theme-actions";
import themeConfig from "./theme.js"
import ImageWithColumn from "./components/feature/imageWithColumn"

const Index = ({ submitted, togglePanel }) => {

  const pStyle = {
    as: "p",
    marginTop: 10,
    color: useColorModeValue('gray.700', 'gray.200'),
    fontSize: {base: 'md', sm: 'lg'},
    lineHeight: "32px"
  }

  const flexBoxStyle = {
    align: 'center',
    justify: 'center',
    color: 'white',
    rounded: 'full',
    bg: 'gray.100',
    mb: 1
  }

  return (
    <ChakraProvider theme={themeConfig}>
      <SEO/>
      <Flex>
        <Box flex="1" >
          <Box pos="absolute" w={120} h={90} zIndex={9} bgColor="rgba(0,0,0,.09)" p={3} pt={7} d={{base: 'none', sm: 'block'}}>
            <Center><Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" /></Center>
          </Box>
          <Image src={`${process.env.PUBLIC_URL}/events/falala/main_banner.png`} />

          <Box p={{base: 4, sm: 10}}>
            <Heading>立即報名：「童你講故事」氣候與環境繪本線上共讀會</Heading>
            <Divider/>
            <Text {...pStyle}>
              由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa La La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
            </Text>

            <Text {...pStyle}>
              在共讀會上，Fa La La老師將生動地講述《無家可歸的我》，配合精美插畫，向小朋友介紹海平面上升、北極融冰、澳洲山火等世界環境面臨的重要事件，並分享愛護環境、家庭節能減碳的小貼士，包括乘搭公共交通工具、珍惜食物等。趁著今年世界地球日，我們邀請您和家中小朋友一起聆聽大自然的故事，一小時認識世界環境問題，做個大小「地球修理員」。
            </Text>
            <Text {...pStyle}>
              由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa La La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
            </Text>
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <Box>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Earth_day_storybook_1.jpg`} />
                  </Flex>
                  <Text>《無家可歸的我》繪本講述野生動物生活受到環境問題影響的故事，由綠色和平團隊耗時9個月製作而成。</Text>
                </Stack>
                {/* <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Falala_and_Brian.jpeg`} />
                  </Flex>
                  <Text>Falala老師曾與綠色和平、小作家Brian簡鏡倫合作分享保育海洋故事The Tale of Tom the Turtle。</Text>
                </Stack> */}
                <Stack>
                  <Flex {...flexBoxStyle}>
                    <Image src={`${process.env.PUBLIC_URL}/events/falala/Polar_bear_and_Koala.png`} />
                  </Flex>
                  <Text>不少野生動物例如北極熊、樹熊等，因為氣候變化與環境破壞而失去家園，值得我們關注。</Text>
                </Stack>
              </SimpleGrid>
            </Box>
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <Divider/>
          </Box>

          <Box p={{base: 4, sm: 10}}>
            <ImageWithColumn pStyle={pStyle}/>
          </Box>

        </Box>
        <Box w={{base: 0, md: '640px'}} p={10} d={{base: 'none', md: 'block'}}>
          <Sticky stickyStyle={{zIndex: 10}}>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
          {submitted ? <NewFrameSubmittedForm formContent={content} /> : <NewFrameForm formContent={content} showProgress={false} newsLetter={false}/>}
          </Box>
          </Sticky>
        </Box>
      </Flex>


      {/* <Box pos="absolute" w={120} h={90} zIndex={9} bgColor="rgba(0,0,0,.09)" p={3} pt={7}>
        <Center><Image src="https://api.greenpeace.org.hk/2021/elm/static/img/gp-logo-vertical.a9c3712c.png" /></Center>
      </Box>
      <Grid
        h={{ base: 640, sm: '90vh'}}
        minHeight={{ base: 640, sm: '960px'}}
        templateRows={{ base: 'repeat(7, 1fr)', sm: 'repeat(11, 1fr)'}}
        templateColumns="repeat(15, 1fr)"
      >
        <GridItem pos="relative" d={{ base: 'none', sm: 'block' }} rowSpan={{ base: 4, sm: 8 }} colSpan={{ base: 15, sm: 10 }}>
          <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            backgroundImage={mainImage}
            bgSize="cover"
          />
        </GridItem>
        <GridItem rowSpan={{ base: 4, sm: 2 }} colSpan={{ base: 15, sm: 5 }} pos="relative" name="test1">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 5000
            }}
            autoHeight={true}
            style={{position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}
          >
          <SwiperSlide>
            <Image src={isMobile ? `${process.env.PUBLIC_URL}/oceans/oceans_2.jpg` : 'https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg'} />
          </SwiperSlide> 
          </Swiper>
        </GridItem>
        <GridItem d={{ base: 'none', sm: 'block' }} rowSpan={{ base: 8, sm: 9 }} colSpan={{ base: 15, sm: 5 }}>
          <Center h="100%" pl={10} pr={10} className="element">
            {submitted ? <NewFrameSubmittedForm/> : <NewFrameForm />}
          </Center>
        </GridItem>
        <GridItem 
          rowSpan={{ base: 3, sm: 5 }} 
          colSpan={{ base: 15, sm: 10 }}>
          <Flex color="white" h="100%">
            <Center bg="#FF8600" w="100%">
              <Box maxW="64rem" py={5} px={{base: 3, sm: 10}}>
                <Heading fontSize={{ base: 'xl', sm: '3xl' }} mb={4}>「童你講故事」氣候與環境繪本線上共讀會</Heading>
                <Text {...textStyle} color="#FFF">
                由綠色和平原創繪本《無家可歸的我》將於4月24日正式於網上發佈！我們邀請到故事導師Fa La La老師參與「童你講故事」氣候與環境繪本線上共讀會，與小朋友和家長共讀《無家可歸的我》。此原創繪本以小朋友豆豆，以及北極熊、樹熊、小丑魚等受氣候變化影響的動物為主角，深入淺出地教育兒童有關環境保護、氣候變化議題。
                </Text>
              </Box>
            </Center>
          </Flex>
        </GridItem>
      </Grid>

      <Box bg={useColorModeValue('gray.50', 'gray.900')} pt={{base: 20, sm: 40}} pb={30}>
        <Center px={{base: 4, sm: 10}}>
          <VStack maxWidth={'3xl'}>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} mb={8} color="campaign.oceans">堅守香港海洋最後一道防線</Heading>
            <Text {...textStyle}>
              政府強推「明日大嶼」，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態；它亦是香港史上最昂貴的基建，造價至少6,240億元，不但可能於10年內（2031 - 32年度）耗盡香港的財政儲備，亦無法有效解決香港逼在眉睫的房屋問題。雖然財委會強行通過了「明日大嶼」5.5億元前期研究撥款，但距離真正落實填海工程仍有極多變數，綠色和平絕不會放棄「堅守大嶼」。
            </Text>
          </VStack>
        </Center>
        {
          !isMobile && otherImages.map(image => (
        <ParallaxImage key={image.src} {...image} />
        ))}

      <Container maxWidth={'8xl'} pt={8} style={{overflow: 'hidden'}}>
      <Flex direction={{base: 'column', sm: 'row'}}>

      <Box p={{base: 0, sm: 4}} w={{base: '100%', sm: 980}}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0431.c6b2b22f.jpg" />
        <Box pt={6}>
        <Text {...textStyleOther}>
            事實上，香港有比「明日大嶼」更明智的選項：綠色和平調查發現，發展棕地造價僅333億元卻可興建近14萬伙公營房屋。
            </Text>
        </Box>
      </Box>
      <Spacer/>

      <Box mt={{base: 10, sm: 480}} p={{base: 0, sm: 4}} w={{base: '100%', sm: 480}}>
        <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/close-up_WBSE_Kevin_Lok.c5c8bcfc.jpg" />
        <Box pt={6}>
        <Text {...textStyleOther}>
          海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！
          </Text>
        </Box>
      </Box>
      </Flex>

      </Container>

      </Box>

      <Box pt={{base: 20, sm: 40}} pb={30}>
        <Center px={{base: 4, sm: 0}}>
          <VStack maxWidth={'3xl'}>
            <Heading fontSize={{ base: 'xl', sm: '3xl' }} mb={4}>「明日」的生態威脅</Heading>
            <Text {...textStyle}>
              鄰近填海選址海域 <span style={{color: '#108ee9', fontWeight: 'bold'}}>具生態價值</span> 生態價值 <span style={{color: '#108ee9', fontWeight: 'bold'}}>絕不應被刻意低估 </span>
            </Text>
          </VStack>
        </Center>

        {!isMobile && images.map(image => (<ParallaxImage key={image.src} {...image} />))}

      <Container maxWidth={'8xl'} pt={{base: 2, sm: 8}} style={{overflow: 'hidden'}}>
        <Flex direction={{base: 'column', sm: 'row'}}>

          <Box mt={{base: 10, sm: 480}} p={{base: 0, sm: 4}} w={{base: '100%', sm: 480}}>
            <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/hk-brownfield.9533d1d7.jpg" />
            <Box pt={6}>
              <Text {...textStyleOther}>
              我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢
              </Text>
            </Box>
          </Box>

          <Spacer/>

          <Box mt={{base: 10, sm: 0}} p={{base: 0, sm: 4}} w={{base: '100%', sm: 980}}>
            <Image src="https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg" />
            <Box pt={6} {...textStyleOther}>
              <Text>全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，<span style={{color: '#108ee9', fontWeight: 'bold'}}>生態價值絕不應被刻意低估</span>。</Text>
            </Box>
          </Box>

        </Flex>

      </Container>

      </Box>

      <Box bg={useColorModeValue('gray.50', 'gray.900')} pt={{base: 20, sm: 40}} pb={{base: 20, sm: 60}}>
        <Container maxWidth={'8xl'} pt={8} style={{overflow: 'hidden'}}>
      <Flex direction={{base: 'column-reverse', md: 'row'}}>

      <Box mt={{base: -10, md: 120}} w={{base: 'auto', md: 720}} mr={{base: 0, md: -180}} mx={{base: '10px', sm: 0}} style={{zIndex: 9}}>
        <Box p={6} bgColor="#FFF">
        <Center mb={{base: 10, sm: 50}}>
          <VStack maxWidth={'3xl'}>
            <Heading fontSize={{ base: 'xl', sm: '3xl' }} mb={{base: 2, sm: 4}}>史上最貴基建</Heading>
            <Text {...textStyle}>耗時至少 <span style={{color: '#108ee9', fontWeight: 'bold'}}>13年</span> 耗費至少 <span style={{color: '#108ee9', fontWeight: 'bold'}}>6,240億公帑</span></Text>
          </VStack>
        </Center>
        <Text {...textStyleOther}>現時輪候公屋年期為5.5年，逾20萬劏房戶等上樓，惟填海預料<span style={{color: '#108ee9', fontWeight: 'bold'}}>至少在13年後</span> - 2032年才能讓市民入伙，無法紓緩燃眉之急，甚至要「邊住邊填海」，居住環境堪憂。</Text>
        <Text {...textStyleOther}>「明日大嶼」耗費<span style={{color: '#108ee9', fontWeight: 'bold'}}>至少6,240億元公帑</span>，工程延期超支仍未計算在內，令人擔憂將耗盡香港的財政儲備。</Text>
        </Box>
      </Box>

      <Box p={{base: 0, sm: 4}} w={{base: '100%', sm: 860}}>
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
      <Flex direction={{base: 'column', sm: 'row'}} >

      <Box w={{base: '100%', sm: 960, md: 1180}} h={{base: 'auto', sm: 720}} pos="relative" py={40}>
        <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            backgroundImage="url('https://api.greenpeace.org.hk/2021/elm/static/img/brownfield.71dd71ae.jpg')"
            bgSize="cover"
          />
      </Box>


      <Center w="100%">
        <Box style={{zIndex: 9}} p={6} bgColor="#FFF" width="100%">
          <Center mb={50}>
          <VStack maxWidth={'2xl'} align="baseline">
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} mb={8} color="campaign.oceans">我們有更明智的選擇</Heading>
          <Text {...textStyle}>
            發展棕地成本<span style={{color: '#108ee9', fontWeight: 'bold'}}>比填海便宜8成</span> 即可興建<span style={{color: '#108ee9', fontWeight: 'bold'}}>14萬伙公營房屋</span>
          </Text>
          <br/>
          <Box >
            <Text {...textStyleOther}>事實上，香港有比「明日大嶼」更明智的選項：發展408公頃的棕地，造地成本估算為333億元。<br/><br/>「除了比填海<span style={{color: '#108ee9', fontWeight: 'bold'}}>便宜8成</span>以外，政府亦可引用《收回土地條例》，以比填海更快的速度，興建近14萬伙公營房屋 ，並取締棕地上的違法及違規作業。</Text>
          </Box>
          <br/>
          {!isMobile && <Link style={{textDecoration: 'none'}} to="test1" spy={true} smooth={true} offset={50} duration={500}><Button
            w="120"
            height="60px"
            borderRadius="0"
            size="lg"
            color="#FFF"
            bg="#108ee9"
            _hover={{ bg: "#21C5D8" }}
          >
            立即聯署
          </Button>
          </Link>}
          </VStack>
        </Center> 
          </Box>
      </Center>

      </Flex>
      </Box> */}

      <Button
        d={{base: 'block', md: 'none'}}
        w="100%"
        color="#FFF"
        bg="orange"
        _hover={{ bg: "campaign.oceans" }}
        height="60px"
        borderRadius="0"
        fontSize="2xl"
        pos="fixed"
        bottom={0}
        zIndex={9}
        onClick={()=>togglePanel(true)}
        style={{zIndex: 999}}
        letterSpacing={4}
        // variant="outline"
      >
        {content.submit_text}
      </Button>
      <Panel formContent={content} />
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
