import { keyframes, styled } from "~/utils/styling";

import HTMLFileIconSvg from "~/assets/html-file-icon.svg";
import FilezillaIconSvg from "~/assets/filezilla-icon.svg";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
});

const NotepadWindow = styled("div", {
  position: "absolute",
  top: "5%",
  left: "5%",
  width: "80%",
  height: "60%",
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
  transition: "all 1s",
  transitionDelay: "$$lineDelay",

  variants: {
    visible: {
      true: {
        width: "$$lineWidth",
      },
    },
  },
});

const moveFile = keyframes({
  "0%": { opacity: 1, scale: 1, top: "10%", left: "10%" },
  "80%": { opacity: 1, scale: 1, top: "70%", left: "70%" },
  "85%": { opacity: 1, scale: 1.3, top: "72%", left: "72%" },
  "90%": { opacity: 1, scale: 1.3, top: "72%", left: "72%" },
  "100%": { opacity: 0, scale: 0.5, top: "72%", left: "72%" },
});

const FileIcon = styled(HTMLFileIconSvg, {
  width: "15%",
  height: "15%",
  position: "absolute",
  top: "10%",
  left: "10%",
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
    moved: {
      true: {
        animation: `${moveFile} 1.4s linear forwards`,
      },
    },
  },
});

const FilezillaIcon = styled(FilezillaIconSvg, {
  width: "15%",
  height: "15%",
  position: "absolute",
  bottom: "10%",
  right: "10%",
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

type FileZillaAnimationProps = {
  part: number;
};

function FileZillaAnimation({ part }: FileZillaAnimationProps) {
  return (
    <Container>
      <NotepadWindow visible={[1, 2].includes(part)}>
        <WindowTitle>Notepad++</WindowTitle>
        <WindowContent>
          <Line visible={part === 2} css={{ $$lineWidth: "35%" }} />
          <Line
            visible={part === 2}
            css={{ $$lineWidth: "80%", $$lineDelay: ".8s" }}
          />
          <Line
            visible={part === 2}
            css={{ $$lineWidth: "30%", $$lineDelay: "1.6s" }}
          />
        </WindowContent>
      </NotepadWindow>

      <FilezillaIcon visible={part >= 4} moved={part === 5} />
      <FileIcon visible={part >= 3} moved={part === 5} />
    </Container>
  );
}

export { FileZillaAnimation };
