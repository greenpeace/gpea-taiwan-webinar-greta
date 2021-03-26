import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Box,
  Button,
  Spacer,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
  HStack,
  Link,
  CircularProgress, 
  CircularProgressLabel,
  Grid,
  GridItem
} from "@chakra-ui/react";
export default function Banner({
  title,
  content,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Container maxW={"7xl"}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column", md: "row" }}
        wrap="no-wrap"
        minH="35vh"
        maxW={"6xl"}
        mb={{base: 8, sm: 24}}
        mt={{base: 8, sm: 24}}
        {...rest}
      >
        <Box
          pt={{ base: 8 }}
          w={{ base: "100%", sm: "100%", md: "70%" }}
        >
          <Image src={"https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0439.50ce887e.jpg"} size="100%" rounded="5px" />
        </Box>
        <Stack
          spacing={4}
          w={{ base: "100%", md: "27%" }}
          pt={{ base: 8 }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <HStack spacing="12px">
            <Box borderWidth="0px" d="flex" alignItems="center" textAlign="center" fontWeight="normal">
              <Text fontSize="2xl">
              具生態價值
            </Text>
            </Box>
            <Box>
              <Heading as="h2" size="sm" color="primary.400" fontWeight="normal">
              絕不應被刻意低估
              </Heading>
            </Box>
          </HStack>

          {/* <Box>
            <Heading
                as="h3"
                size="sm"
                color="primary.400"
                textAlign={["center", "center", "left", "left"]}
              >
                {title}
              </Heading>
          </Box> */}

          {/* <Divider /> */}
          {/* <Text
            fontSize="md"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.8"
            textAlign={["center", "center", "left", "left"]}
          >
            {content}
          </Text> */}
          <Text
            fontSize={{base: 'sm', sm: 'md'}}
            mt={2}
            textAlign="left"
            color="primary.800"
            opacity="0.6"
          >
            我們與6個環保及關注團體發佈的生態調查發現，鄰近填海選址的周公島，具國家二級保護野生動物白腹海鵰的鳥巢，全球獨有的鮑氏雙足蜥，更在中部水域錄得一種稀有的軟珊瑚海筆，生態價值絕不應被刻意低估。
          </Text>

          {/* <HStack pacing={8}>
            <Box pr={2}>
            <CircularProgress size="90px" value={40} color="green.400" thickness="3px">
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
            </Box>
            <Box>
              <Heading as="h2" size="md" color="primary.400">
                HKD 134,000
              </Heading>
              <Text
            fontSize="xs"
            mt={2}
            textAlign="left"
            color="primary.800"
            opacity="0.6"
          >
            目標: HKD 250,000
          </Text>
            </Box>
          </HStack> */}

          {/* <Divider /> */}

          {/* <Grid templateColumns="repeat(5, 1fr)" gap={6}>
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
  <Box w="100%" h="10" bg="blue.500" />
</Grid> */}


          {/* <Stack direction={["column"]} spacing="12px">
            <Box h="10px">
            <Text fontSize="xs">
              <b>贊助人數</b> 48
            </Text>
            </Box>
            <Box h="10px">
            <Text fontSize="xs">
              <b>贊助人數</b> 48
            </Text>
            </Box>

            <Box h="10px">
            <Text fontSize="xs">
              <b>剩餘時間</b> 3天
            </Text>
            </Box>
          </Stack> */}
        
        </Stack>
      </Flex>
    </Container>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};

Banner.defaultProps = {
  title: "守護香港未來",
  // content: "香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。",
  content: "堅守香港海洋最後一道防線",
  image: "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg",
};
