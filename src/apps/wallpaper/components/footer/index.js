import {
  Box,
  Image,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';

const Logo = (props) => {
  return (
    <Box>
    <Image
      maxW="200px"
      objectFit="contain"
      src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-white-%5bweb%5d-01.png"
    /></Box>
  );
};

export default function SmallCentered() {
  return (
    <Flex
      bg={"darkblue"}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt={{base: 20, sm: 0}}
      py={{base: 10}}
      pos={'relative'}
      zIndex={99}
      >
      <Container
          as={Stack}
          maxW={'100%'}
          py={4}
          px={{base: 4, sm: 10}}
          pb={{base: 20, sm: 4}}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'right', md: 'space-between' }}
          align={{ base: 'right', md: 'center' }}>
            <Box maxWidth="480px">
              <Logo/>
              <Text as="p" color="#FFF" style={{lineHeight: '24px', paddingTop: '18px', paddingBottom: '18px'}}>
                綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。
              </Text>
              <Text color="#FFF">© GREENPEACE 2021</Text>
            </Box>
          <Box>
          <Stack direction={{base: 'column'}} spacing={6} color="#FFF" textAlign={{base: "right"}}>
          <Link href={'https://www.greenpeace.org/hongkong'} target="_blank">首頁</Link>
          <Link href={'https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/?_ga=2.180264813.855211881.1618118536-438458975.1614842560'} target="_blank">私隱政策與個人資料收集聲明</Link>
          <Link href={'https://www.greenpeace.org/hk/about'} target="_blank">聯絡我們</Link>
          <Link href={'https://www.greenpeace.org/hongkong/about/overview'} target="_blank">關於綠色和平</Link>
        </Stack>
      </Box>
      </Container>
    </Flex>
  );
}