import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, Box, HStack, Flex, Spacer, AddIcon, Button } from "@chakra-ui/react"
import GridWithHeader from '../feature/gridWithHeader'
import ParallaxImage from '../parallex/parallexImages'
import Sticky from 'react-sticky-el';
import { images } from "../parallex/images";

export default function TabView(){
    return(
      <>
      <Sticky stickyStyle={{zIndex: 10}}>
      <Box mb={{base: 2}} pt={{base: 2}} pb={{base: 2}} borderTop="1px" borderBottom="1px" borderColor="gray.100" backgroundColor='#fff'>
      <Container maxW={'5xl'} pb={1}>
      <Flex>
  <Box p="3">
  內容
  </Box>
  <Box p="3">
  常見問題
  </Box>
  <Box p="3">
  其他資料
  </Box>
  <Spacer />
  <Box p="1">
  <Button
      variant={'solid'}
      colorScheme={'teal'}
      size={'md'}>
      立即聯署
    </Button>
  </Box>
</Flex>
      </Container>
      </Box>
      </Sticky>
      <Container maxW={'5xl'} pb={1}>
      {images.map(image => (
        <ParallaxImage key={image.src} {...image} />
      ))}
        <GridWithHeader/>
        <GridWithHeader/>
        <GridWithHeader/>
      </Container>
      </>
  )
}