import React, { useEffect, useState } from "react";
import { Text, Box, HStack, Stack } from "@chakra-ui/react";

export default function Countdown() {
  const countdownDate = new Date("May 22, 2021 14:30:00").getTime();
  const [countDown, setCountDown] = useState("Count");
  const renderLayout = (count, unit) => {
    return (
      <HStack align="center">
        <Text fontSize="lg">{count}</Text>
        <Text fontSize="md">{unit}</Text>
      </HStack>
    );
  };
  useEffect(() => {
    // Update the count down every 1 second
    let timer = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountDown(
        <HStack spacing={"12px"}>
          <Box>{renderLayout(days, "天")}</Box>
          <Box>{renderLayout(hours, "小時")}</Box>
          <Box>{renderLayout(minutes, "分")}</Box>
          <Box>{renderLayout(seconds, "秒")}</Box>
        </HStack>
      );

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(timer);
        setCountDown(`EXPIRED`);
      }
    }, 1000);
  }, []);

  return (
    <Stack
      direction={{ base: "column", sm: "row" }}
      align={{ base: "left", sm: "center" }}
    >
      <Box>報名時間尚餘:</Box>
      <Box>{countDown}</Box>
    </Stack>
  );
}
