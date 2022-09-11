import { PropsWithChildren } from "react";

import { globalCss, styled } from "../utils/styling";

const globalStyles = globalCss({
  "html, body": {
    margin: 0,
    padding: 0,
  },

  html: {
    background: "#d62f2f",
  },

  body: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  },

  "*, *:before, *:after": {
    boxSizing: "border-box",
  },
});

const Container = styled("div", {
  padding: ".8rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "@media (min-width: 50rem)": {
    padding: "3rem",
  },
});

function Layout({ children }: PropsWithChildren<Record<never, any>>) {
  globalStyles();
  return <Container>{children}</Container>;
}

export { Layout };
