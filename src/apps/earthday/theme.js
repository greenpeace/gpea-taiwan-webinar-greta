// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ddffa3",
      300: "#a2e649",
      400: "#85D633",
      500: "#66cc00", // Default GP
      600: "#57AD00",
      700: "#378000",
      900: "#133300",
    },
    gray: {
      100: "#F1F4F9",
      300: "#CFD5E1",
      500: "#6F788B",
      700: "#363F55",
      900: "#11152A",
    },
    system: {
      error: "#FF3333",
      warning: "#F0AF23",
      success: "#66cc00",
    },
    orange: "#ff8100",
    red: "#ff3333",
    lightblue: "#f4f9fa",
    blue: "#108ee9",
    darkblue: "#292f47",
    campaign: {
      arctic: "#62cbd7",
      health: "#f96d8c",
      climate: "#ffbe00",
      plastics: "#afaa91",
      forests: "#00b474",
      oceans: "#008fe2",
    },
  },
  bg: {
    darkblue: "#292f47",
    campaign: {
      arctic: "#62cbd7",
      health: "#f96d8c",
      climate: "#ffbe00",
      plastics: "#afaa91",
      forests: "#00b474",
      oceans: "#008fe2",
    },
    orange: "#ff8100",
  },
});

export default theme;
