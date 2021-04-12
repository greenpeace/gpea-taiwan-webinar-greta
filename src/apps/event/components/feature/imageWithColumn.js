import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
  IoTimeSharp,
  IoTimeOutline,
  IoVideocam
} from 'react-icons/io5';

const Feature = ({ text, icon, iconBg}) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage({pStyle}) {
  return (
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={{base: "xl", sm: "2xl"}}>故事導師Fa La La老師</Heading>
          <Text {...pStyle}>
          資深幼兒教育工作者，並於公共圖書館擔任故事導師。Fa La La老師亦是「Fa La La 繪本遊世界」網上平台的創辦人，她喜愛運用繪本打開孩子心扉，透過與孩子共讀，向他們分享許多生命的正能量和反思。2019年世界海洋日，Fa La La老師曾與小作家簡鏡倫Brian講述《The Tale of Tom the Turtle》繪本，並與海龜玩偶上演小劇場，和親子參加者宣傳保護海洋的訊息。
          </Text>
          <Stack
            pt={4}
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Feature
              icon={
                <Icon as={IoTimeOutline} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'日期：2021年4月24日（星期六）'}
            />
            <Feature
              icon={
                <Icon as={IoTimeSharp} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'時間：下午4時半至5時半'}
            />
            <Feature
              icon={<Icon as={IoVideocam} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）'}
            />
          </Stack>
        </Stack>
        <Flex direction="column">
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={`${process.env.PUBLIC_URL}/events/falala/Falala_and_Brian.jpeg`}
            pb={3}
          />
          <Text>Falala老師曾與綠色和平、小作家Brian簡鏡倫合作分享保育海洋故事The Tale of Tom the Turtle。</Text>
        </Flex>
      </SimpleGrid>
  );
}