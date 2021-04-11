import {
  Box,
  Image,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';

const Logo = (props) => {
  return (
    <Box>
            <Image
              maxW="150px"
              objectFit="contain"
              src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
            /></Box>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'100%'}
        py={4}
        spacing={4}
        justify={{base: 'left', sm: 'center'}}
        align={{base: 'left', sm: 'center'}}>
        <Logo />
        <Stack direction={{base: 'column', sm: 'row'}} spacing={6}>
          <Link href={'https://www.greenpeace.org/hongkong'} target="_blank">首頁</Link>
          <Link href={'https://www.greenpeace.org/hongkong/policies/privacy-and-cookies/?_ga=2.180264813.855211881.1618118536-438458975.1614842560'} target="_blank">私隱政策與個人資料收集聲明</Link>
          <Link href={'https://www.greenpeace.org/hk/about'} target="_blank">聯絡我們</Link>
          <Link href={'https://www.greenpeace.org/hongkong/about/overview'} target="_blank">關於綠色和平</Link>
        </Stack>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          pb={{base: 20, sm: 4}}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'left', md: 'space-between' }}
          align={{ base: 'left', md: 'center' }}>
          <Text>© GREENPEACE 2021</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com/greenpeace'} target="_blank">
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://www.youtube.com/channel/UCXTK00OzHT1lgMotSMNAVbg'} target="_blank">
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/greenpeace_hk/?hl=zh-hk'} target="_blank">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}