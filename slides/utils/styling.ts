import * as Stitches from "@stitches/react";
console.log({ Stitches });
const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = Stitches.createStitches({
  prefix: "slides",
  theme: {
    colors: {
      computerOld: "#E8E2D0",
      computerNormal: "#e2e0d9",
      computerModern: "#dadcd8",

      desk: "#D3BF97",
      wall: "#F5F4F0",
      screen: "#B7DBEF",

      white: "#fff",
      black: "#000",
      grey: "#eee",
      blue: "#2667a7",
      green: "#cae59d",
      yellow: "#ffe8b6",
    },
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};
