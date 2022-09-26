import React from "react";
import {
  MantineProvider,
  createEmotionCache,
  MantineThemeOverride,
  DefaultMantineColor
} from "@mantine/core";
import { GlobalStyle } from "./GlobalStyle";
import { NotificationsProvider } from "@mantine/notifications";
import { Components } from "./components";

const myCache = createEmotionCache({ key: "mantine" });

const myTheme: MantineThemeOverride = {
  colorScheme: "dark",
  colors: {
    orange: ["#DA7A2F"],
    blue: ["#0E043D", "#59069A"],
    light: ["#ffffff", "#BBBBBB" ,'#B3B3B3' ,"#333333"],
    dark: ["#ffffff" ,"#333333"],
    brand:["#DA7A2F","#0E043D" ,"#59069A","#BBBBBB" ,'#B3B3B3' ,"#333333"]
  },
  primaryColor: 'blue',

  radius: {
    xs: 8,
    sm: 12,
    md: 16,
  },
  defaultRadius: "xs",

  fontSizes: {
    xs: 12,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24,
  },
  loader: "bars",

  fontFamily: "raleway",
  headings: {
    fontWeight: 400,
    fontFamily: "raleway",
    sizes: {
      h1: { fontWeight: 600, fontSize: 42, lineHeight: 1.4 },
      h2: { fontWeight: 600, fontSize: 35, lineHeight: 1.4 },
      h3: { fontWeight: 600, fontSize: 30, lineHeight: 1.4 },
      h4: { fontWeight: 600, fontSize: 28, lineHeight: 1.4 },
      h5: { fontWeight: 600, fontSize: 24, lineHeight: 1.4 },
      h6: { fontWeight: 600, fontSize: 20, lineHeight: 1.4 },
    },
  },

  black: "#333",
  white: "#fff",
  components: Components
};

type props = {
  children: React.ReactNode;
};
export function Theme({ children }: props) {
  return (
    <>
      <GlobalStyle />
      <MantineProvider
        emotionCache={myCache}
        withNormalizeCSS
        withGlobalStyles
        theme={myTheme}
      >
        <NotificationsProvider>{children}</NotificationsProvider>
      </MantineProvider>
    </>
  );
}
