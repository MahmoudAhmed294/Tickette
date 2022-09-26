import { Global } from "@mantine/core";

import regular from "../assets/fonts/ralewayRegular.woff";
import font600 from "../assets/fonts/raleway600.woff";
import font800 from "../assets/fonts/raleway800.woff";

export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },
        FontFamily: [
          {
            "@font-face": {
              fontFamily: "raleway",
              src: `url('${regular}') format("woff")`,
              fontWeight: 400,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "raleway",
              src: `url('${font600}') format("woff")`,
              fontWeight: 600,
              fontStyle: "normal",
            },
          },
          {
            "@font-face": {
              fontFamily: "raleway",
              src: `url('${font800}') format("woff")`,
              fontWeight: 800,
              fontStyle: "normal",
            },
          },
        ],

        body: {
          ...theme.fn.fontStyles(),
          height:"100%",
          backgroundImage: `linear-gradient(180deg, #0E043D , #59069A)`,
          lineHeight: theme.lineHeight,
          fontFamily: "raleway",
          color:"#fff",
          fontWeight: 400,
        },
        a:{
          color:"#fff",
          textDecoration: "unset",
          transition:"0.1s ease-out",

        },

      })}
    />
  );
}
