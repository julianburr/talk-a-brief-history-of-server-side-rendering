/* eslint-disable react/jsx-key */
import { styled } from "~/utils/styling";

import { ajaxUserExperience } from "~/utils/content/ajaxUserExperience";
import { clientSideRenderingUserExperience } from "~/utils/content/clientSideRenderingUserExperience";
import { dynamicHtmlUserExperience } from "~/utils/content/dynamicHtmlUserExperience";
import { fileZillaAnimation } from "~/utils/content/fileZillaAnimation";
import { serverComponentsUserExperience } from "~/utils/content/serverComponentsUserExperience";
import { serverSideRenderingUserExperience } from "~/utils/content/serverSideRenderingUserExperience";
import { staticHtmlUserExperience } from "~/utils/content/staticHtmlUserExperience";
import { staticSiteGenerationUserExperience } from "~/utils/content/staticSiteGenerationUserExperience";
import { staticGenerationAnimation } from "~/utils/content/staticGenerationAnimation";

const Title = styled("h1", {
  fontSize: "11vh",
  lineHeight: 1.1,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "relative",

  variants: {
    small: {
      true: {
        fontSize: "8vh",
        color: "$blue",
        padding: "0 10vh",
      },
    },
  },
});

const Number = styled("span", {
  fontSize: "20vh",
  color: "$blue",
  opacity: 0.2,
  position: "absolute",
  top: "-2vh",
  left: "2vh",
  zIndex: 0,
  fontWeight: 900,
});

const content = [
  [
    // Plain HTML
    <Title>Good ol&apos; HTML</Title>,
    ...fileZillaAnimation,
    ...staticHtmlUserExperience,
  ],

  [
    // Dynamic HTML
    <Title>Being dynamic on the server</Title>,
    ...dynamicHtmlUserExperience,

    // AJAX
    <Title>Introducing JS and AJAX</Title>,
    ...ajaxUserExperience,
  ],

  [
    // Client side JS
    <Title>Moving to the client</Title>,
    ...clientSideRenderingUserExperience,

    // SSG
    <Title>Static site generation</Title>,
    ...staticGenerationAnimation,
    ...staticSiteGenerationUserExperience,
  ],

  [
    // SSR
    <Title>Server side rendering</Title>,
    ...serverSideRenderingUserExperience,

    // Code
    <Title>
      Let&apos;s look at
      <br />
      some code
    </Title>,

    // React server components
    <Title>React Server Components</Title>,
    ...serverComponentsUserExperience,

    // Summary
    <Title>Key take aways</Title>,

    <>
      <Number>1</Number>
      <Title small>
        Always look at your specific use case and requirements
      </Title>
    </>,
    <>
      <Number>2</Number>
      <Title small>
        There is no silver bullet, the best solution is often a hybrid of
        techniques
      </Title>
    </>,
    <>
      <Number>3</Number>
      <Title small>
        Don&apos;t lock yourself in, write code that&apos;s easy to evolve in
        the future
      </Title>
    </>,
    <Title>The end</Title>,
  ],
] as const;

const flatContent = content.reduce<JSX.Element[]>(
  (all, arr) => all.concat(arr),
  []
);

export { content, flatContent };
