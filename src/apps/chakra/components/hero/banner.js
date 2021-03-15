import React from "react"
import PropTypes from "prop-types"
import {
  Container,
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react"
 
export default function Banner({
  title,
  content,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Container maxW={'6xl'}>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column", md: "row" }}
        wrap="no-wrap"
        minH="40vh"
        maxW={'6xl'}
        mb={16}
        {...rest}
      >
      <Box pt={{ base: 12, md: 0 }} w={{ base: "50%", sm: "90%", md: "55%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Divider />
        <Text
          fontSize="md"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.8"
          textAlign={["center", "center", "left", "left"]}
        >
          {content}
        </Text>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="left"
          color="primary.800"
          opacity="0.6"
        >
          海洋住屋不對立，為了珍貴脆弱的海洋生態，及讓市民安居樂業，一起發聲，要求政府優先發展棕地，放棄不負責任的「明日大嶼」！
        </Text>
      </Stack>
    </Flex>
    </Container>
  )
}
 
Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
}
 
Banner.defaultProps = {
  title: "守護大嶼",
  content:
    "香港海洋孕育近6千種海洋生物，東大嶼水域生態豐富多樣，是國家重點保護野生動物白腹海雕的繁殖及棲息地，更錄得全球獨有的鮑氏雙足蜥，附近水域亦發現稀有的軟珊瑚海筆。",
  image: "https://api.greenpeace.org.hk/2021/elm/static/img/DJI_0409.89f89e20.jpg"
}