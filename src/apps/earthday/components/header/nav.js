import {
  Container,
  Box,
  Flex,
  HStack,
  Link,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { connect } from "react-redux";
import * as themeActions from "store/actions/action-types/theme-actions";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

const Nav = ({ togglePanel }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box borderBottom="1px" borderColor="gray.100">
        <Container maxW={"12xl"}>
          <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            px={{ base: "0px", sm: "30px" }}
          >
            {/* <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: !isOpen ? 'none' : 'inherit' }}
            onClick={isOpen ? onClose : onOpen}
          /> */}
            <HStack spacing={{ base: 4, sm: 8 }} alignItems={"center"}>
              <Box>
                <Image
                  maxW={{ base: "180px", sm: "220px" }}
                  objectFit="contain"
                  src="https://api.greenpeace.org.hk/general/logo/GP-logo-2019-TC-green-%5bweb%5d-01.png"
                />
              </Box>
            </HStack>
            <Flex alignItems={"center"}>
              <Button
                d={{ base: "block", md: "none" }}
                w="100%"
                color="#FFF"
                bg="#ff8100"
                _hover={{ bg: "campaign.climate" }}
                height={{ base: "40px", sm: "50px" }}
                borderRadius="24px"
                px={{ base: 4, sm: 6 }}
                fontSize={{ base: "md", sm: "xl" }}
                bottom={0}
                zIndex={9}
                onClick={() => togglePanel(true)}
                style={{ zIndex: 999 }}
                letterSpacing={2}
              >
                立即登記
              </Button>
            </Flex>
          </Flex>
        </Container>
        {/*
        {isOpen ? (
          <Box pb={4}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null} */}
      </Box>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    togglePanel: (bol) => {
      dispatch({ type: themeActions.TOGGLE_PANEL, bol });
    },
  };
};

export default connect(null, mapDispatchToProps)(Nav);
