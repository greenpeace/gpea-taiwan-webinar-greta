import { ReactNode } from 'react';
import {
  Container,
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';


const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
    <Box borderBottom="1px" borderColor="gray.100">
      <Container maxW={'12xl'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
            <Image
              maxW="200px"
              objectFit="contain"
              src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
            /></Box>
          </HStack>
          <Flex alignItems={'center'}>
            {/* <Button
              variant={'solid'}
              colorScheme={'teal'}
              size={'sm'}
              leftIcon={<AddIcon />}>
              聯署
            </Button> */}
            <HStack>
  <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
    Facebook
  </Button>
</HStack>
          </Flex>
        </Flex>

        </Container>
        

        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}