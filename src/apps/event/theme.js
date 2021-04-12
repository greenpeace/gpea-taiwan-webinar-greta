// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#ddffa3",
      300: "#a2e649",
      500: "#66cc00", // Default GP
      700: "#378000",
      900: "#133300",
    },
    gray: {
      100: "#f5f5f5",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
      900: "#212121",
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
    orange: "#ff8100"
  }
});

export default theme;
