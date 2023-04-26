import { extendTheme } from "@chakra-ui/react";

// Background: #202329 (dark gray)
// Primary: #23CE6B (green, like the portal)
// Secondary: #5A4FCF (blue, like Rick's portal gun)
// Accent: #FF9800 (orange, for contrast)
// Text: #FFFFFF (white)

const theme = extendTheme({
  colors: {
    brand: {
      background: "#202329",
      primary: "#23CE6B",
      secondary: "#5A4FCF",
      accent: "#FF9800",
      text: "#FFFFFF",
      alive: "#2ecc71",
      dead: "#e74c3c",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Box: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Container: {
      baseStyle: {
        maxW: "container.xl",
      },
    },
    SimpleGrid: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Flex: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Spinner: {
      baseStyle: {
        color: "brand.secondary",
      },
    },
    Text: {
      baseStyle: {
        color: "brand.text",
      },
    },
    Input: {
      baseStyle: {
        borderColor: "brand.secondary",
        _hover: {
          borderColor: "brand.primary",
        },
        _focus: {
          borderColor: "brand.primary",
        },
      },
    },
    Select: {
      baseStyle: {
        borderColor: "brand.secondary",
        bg: "brand.background",
        color: "brand.text",
        _hover: {
          borderColor: "brand.primary",
        },
        _focus: {
          borderColor: "brand.primary",
          boxShadow: "0 0 0 1px #7CD7D9",
        },
      },
    },
    Switch: {
      baseStyle: {
        track: {
          _checked: {
            bg: "brand.primary",
          },
        },
        thumb: {
          _checked: {
            bg: "brand.secondary",
          },
        },
      },
    },
    Button: {
      baseStyle: {
        bg: "brand.primary",
        color: "brand.text",
        _hover: {
          bg: "brand.secondary",
        },
      },
    },
  },
});

export default theme;
