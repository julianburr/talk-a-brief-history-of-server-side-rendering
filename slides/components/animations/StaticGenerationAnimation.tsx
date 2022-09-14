import { keyframes, styled } from "~/utils/styling";

import EmojiLoadingSvg from "~/assets/emoji-loading.svg";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
});

const NotepadWindow = styled("div", {
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "65%",
  height: "50%",
  background: "$white",
  transformOrigin: "10% 10%",
  transition: "all .4s",
  opacity: 0,
  scale: 0.5,

  variants: {
    visible: {
      true: {
        opacity: 1,
        scale: 1,
      },
    },
  },
});

const TerminalWindow = styled("div", {
  position: "absolute",
  bottom: "5%",
  right: "5%",
  width: "45%",
  height: "30%",
  background: "$white",
  transformOrigin: "10% 10%",
  transition: "all .4s",
  opacity: 0,
  scale: 0.5,

  variants: {
    visible: {
      true: {
        opacity: 1,
        scale: 1,
      },
    },
  },
});

const WindowTitle = styled("div", {
  width: "100%",
  fontSize: "1.5vh",
  fontFamily: "Bebas Neue",
  lineHeight: 1.1,
  padding: ".3vh 2vh",
  background: "$grey",
});

const WindowContent = styled("div", {
  width: "100%",
  padding: "2vh",
});

const Line = styled("div", {
  $$lineWidth: "80%",
  $$lineDelay: 0,

  width: 0,
  height: "2vh",
  marginBottom: ".5vh",
  position: "relative",
  background: "$grey",
  borderRadius: ".2vh",
  transition: "all .6s",
  transitionDelay: "$$lineDelay",

  variants: {
    visible: {
      true: {
        width: "$$lineWidth",
      },
    },
  },
});

const spin = keyframes({
  "0%": { rotate: "0deg" },
  "50%": { rotate: "0deg" },
  "100%": { rotate: "180deg" },
});

const Loading = styled(EmojiLoadingSvg, {
  width: "6vh",
  height: "auto",
  position: "absolute",
  top: "-2vh",
  right: "-2vh",
  animation: `${spin} .8s infinite`,
  transition: "all .2s",
  opacity: 0,
  scale: 0.5,

  variants: {
    visible: {
      true: {
        opacity: 1,
        scale: 1,
      },
    },
  },
});

type StaticGenerationAnimationProps = {
  part: number;
};

function StaticGenerationAnimation({ part }: StaticGenerationAnimationProps) {
  return (
    <Container>
      <NotepadWindow visible>
        <WindowTitle>VS Code</WindowTitle>
        <WindowContent>
          <Line visible css={{ $$lineWidth: "60%" }} />
          <Line visible css={{ $$lineWidth: "55%" }} />
          <Line visible css={{ $$lineWidth: "65%" }} />
          <Line visible={part >= 2} css={{ $$lineWidth: "40%" }} />
          <Line
            visible={part >= 2}
            css={{ $$lineWidth: "80%", $$lineDelay: ".6s" }}
          />
          <Line
            visible={part >= 2}
            css={{ $$lineWidth: "45%", $$lineDelay: "1.2s" }}
          />
        </WindowContent>
      </NotepadWindow>

      <TerminalWindow visible={part >= 3}>
        <Loading visible={part === 4} />
        <WindowTitle>iTerm</WindowTitle>
        <WindowContent>
          <Line visible={part === 4} css={{ $$lineWidth: "40%" }} />
          <Line
            visible={part === 4}
            css={{ $$lineWidth: "80%", $$lineDelay: ".6s" }}
          />
          <Line
            visible={part === 4}
            css={{ $$lineWidth: "45%", $$lineDelay: "1.2s" }}
          />
        </WindowContent>
      </TerminalWindow>
    </Container>
  );
}

export { StaticGenerationAnimation };
