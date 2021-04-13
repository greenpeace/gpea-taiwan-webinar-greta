import { SimpleGrid, Image, Flex, Text, Stack } from "@chakra-ui/react";

export default function SplitWithImage({ pStyle, captionStyle }) {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      <Stack spacing={4}>
        <Text {...pStyle} mt="0">
          Fa La La老師是「Fa La La
          繪本遊世界」網上平台的創辦人，她喜愛運用繪本打開孩子心扉，透過與孩子共讀，向他們分享許多生命的正能量和反思。
        </Text>
        <Text {...pStyle}>
          2019年世界海洋日，Fa La La老師曾與小作家簡鏡倫Brian講述《The Tale of
          Tom the
          Turtle》繪本，並與海龜玩偶上演小劇場，和親子參加者宣傳保護海洋的訊息。
        </Text>
      </Stack>
      <Flex direction="column">
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={`${process.env.PUBLIC_URL}/events/falala/Falala_and_Brian.jpeg`}
          pb={4}
        />
        <Text>
          Falala老師曾與綠色和平、小作家Brian簡鏡倫合作分享保育海洋故事The Tale
          of Tom the Turtle。
        </Text>
      </Flex>
    </SimpleGrid>
  );
}
