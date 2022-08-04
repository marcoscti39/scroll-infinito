import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#2C3333",
        mb: "50rem"
      },
    }),
  },
});

export default Theme;