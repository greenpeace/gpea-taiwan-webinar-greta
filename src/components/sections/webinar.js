import "swiper/swiper.scss";
import React from "react";
import { Box, Text, Stack, useColorModeValue, Circle, Icon} from "@chakra-ui/react";
import { IoCalendarOutline, IoTimeSharp, IoVideocam } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { SiAirplayvideo } from "react-icons/si";
import { BiCalendar } from "react-icons/bi";

const Webinar = ({content}) => {
  const Feature = ({ text, icon, iconBg }) => {
    return (
      <Stack direction={"row"} align={"center"}>
        <Circle size="40px" color="white" bg={iconBg}>
          {icon}
        </Circle>
        <Text pl="2" fontSize="lg" color="gray.900">
          {text}
        </Text>
      </Stack>
    );
  };

  const subHeadline = {
    color: "gray.700",
    fontSize: "sm",
    lineHeight: "1.5",
    mt: "10",
    mb: "4",
    pl: "2",
  };

  return (
    <Box>
    <Text {...subHeadline}>WEBINAR STARTS IN</Text>
    <Stack spacing={4}>
      <Feature
        icon={
          <Icon
            as={BiCalendar}
            color={"brand.400"}
            w={5}
            h={5}
          />
        }
        iconBg={useColorModeValue("brand.100", "brand.900")}
        text={content.date}
      />
      <Feature
        icon={
          <Icon
            as={IoTimeSharp}
            color={"#FFF"}
            w={5}
            h={5}
          />
        }
        iconBg={"brand.300"}
        text={content.time}
      />
      <Feature
        icon={
          <Icon as={SiAirplayvideo} color={"#FFF"} w={5} h={5} />
        }
        iconBg={"green.900"}
        text={content.description}
      />
    </Stack>
  </Box>
  );
};

export default Webinar;
