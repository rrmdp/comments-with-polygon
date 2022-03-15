import { extendTheme, theme as DEFAULT_THEME } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bgGradient: "",
      },
    },
  },
  colors: {
    /*gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },*/
    green: {
      50: "#F0FFF4",
      100: "#C6F6D5",
      200: "#9AE6B4",
      300: "#68D391",
      400: "#48BB78",
      500: "#38A169",
      600: "#2F855A",
      700: "#276749",
      800: "#22543D",
      900: "#1C4532",
    },
  },
  components: {
    Heading: {
      colorScheme: {
        color: "red",
      },
    },
    Avatar: {
      baseStyle: {
        container: {
          bgGradient: "linear(to-r, purple.300, pink.300)",
          // border: "2px solid var(--chakra-colors-purple-300)"
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "pink.200",
      },
    },
    Spinner: {
      baseStyle: {
        color: "pink.200",
      },
    },
  },
  shadows: {
    outline: "0 0 0 3px var(--chakra-colors-pink-200) !important",
  },
});

export default theme;
