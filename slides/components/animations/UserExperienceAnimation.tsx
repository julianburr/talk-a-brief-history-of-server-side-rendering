import { keyframes, styled } from "~/utils/styling";

import ServerIconSvg from "~/assets/server-icon.svg";
import DatabaseIconSvg from "~/assets/database-icon.svg";
import NonIneractiveIconSvg from "~/assets/non-interactive-icon.svg";

import EmojiSleepingSvg from "~/assets/emoji-sleeping.svg";
import EmojiLoadingSvg from "~/assets/emoji-loading.svg";

import HtmlIconSvg from "~/assets/html-file-icon.svg";
import CssIconSvg from "~/assets/css-file-icon.svg";
import JpgIconSvg from "~/assets/jpg-file-icon.svg";
import JsIconSvg from "~/assets/js-file-icon.svg";
import JsonIconSvg from "~/assets/json-file-icon.svg";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  position: "relative",
});

const Client = styled("div", {
  width: "30%",
  height: "28%",
  top: "39%",
  left: "3%",
  position: "absolute",
  background: "$white",
});

const ClientUrlBar = styled("div", {
  width: "100%",
  fontSize: "1vh",
  fontFamily: "Bebas Neue",
  lineHeight: 1,
  padding: ".4vh 2vh",
  background: "$grey",
});

const ClientContentHeading = styled("div", {
  position: "absolute",
  top: "calc(2vh + 10%)",
  left: "10%",
  right: "40%",
  height: "8%",
  borderRadius: ".2vh",
  background: "$grey",
  transition: "all .2s",
  transformOrigin: "center",
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

const flash = keyframes({
  "0%, 40%, 80%": { background: "$grey" },
  "20%, 60%, 100%": { background: "$green" },
});

const ClientContentImage = styled("div", {
  position: "absolute",
  top: "calc(2vh + 23%)",
  left: "10%",
  right: "10%",
  height: "40%",
  borderRadius: ".2vh",
  background: "$grey",
  transition: "all .2s",
  transitionDelay: ".1s",
  transformOrigin: "center",
  opacity: 0,
  scale: 0.5,

  variants: {
    visible: {
      true: {
        opacity: 1,
        scale: 1,
      },
    },
    updated: {
      true: {
        animation: `${flash} 1.4s forwards`,
      },
    },
  },
});

const spin = keyframes({
  "0%": { rotate: "0deg" },
  "50%": { rotate: "0deg" },
  "100%": { rotate: "180deg" },
});

const Emoji = styled("div", {
  width: "6vh",
  height: "auto",
  position: "absolute",
  top: "-2vh",
  right: "-2vh",
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
    spinning: {
      true: {
        animation: `${spin} .8s infinite`,
      },
    },
  },
});

const Server = styled("div", {
  width: "28%",
  height: "28%",
  top: "39%",
  right: "3%",
  position: "absolute",

  "& svg:first-child": {
    height: "100%",
    width: "auto",
  },
});

const ClientServerConnection = styled("div", {
  position: "absolute",
  top: "75%",
  height: "1vh",
  borderRadius: ".5vh",
  left: "15%",
  right: "15%",
  background: "$blue",
});

const Dot = styled("div", {
  position: "absolute",
  left: "-.5vh",
  top: "-.5vh",
  height: "2vh",
  width: "2vh",
  borderRadius: "1vh",
  background: "$yellow",
  transition: "left .8s, background .2s",

  variants: {
    target: {
      client: {
        left: "-.5vh",
      },
      server: {
        left: "calc(100% - 1.5vh)",
      },
    },
  },
});

const ResponseType = styled("div", {
  position: "absolute",
  top: "calc(100% + 1vh)",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: ".3vh",
});

const File = styled("div", {
  width: "6vh",
  margin: "0 .2vh",

  "& svg": {
    width: "100%",
    height: "auto",
  },
});

const Database = styled(DatabaseIconSvg, {
  width: "28%",
  height: "28%",
  top: "3%",
  right: "3%",
  position: "absolute",
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

const Label = styled("span", {
  position: "absolute",
  color: "$blue",
  fontSize: "4vh",
  fontFamily: "Bebas Neue",
  lineHeight: 1,
  top: "3%",
  left: "3%",
  width: "60%",
  textAlign: "left",
});

const FileIcons = {
  html: HtmlIconSvg,
  css: CssIconSvg,
  jpg: JpgIconSvg,
  js: JsIconSvg,
  json: JsonIconSvg,
};

type UserExperienceAnimationProps = {
  browserName: string;
  target: "client" | "server" | "database";
  clientState?: "none" | "empty" | "partial" | "loading" | "loaded";
  responseTypes?: (keyof typeof FileIcons)[];
  label?: string;
  sleeping?: boolean;
  updated?: boolean;
  loading?: boolean;
  interactive?: boolean;
};

function UserExperienceAnimation({
  browserName,
  target,
  clientState = "none",
  responseTypes,
  label,
  sleeping,
  updated,
  loading,
  interactive = true,
}: UserExperienceAnimationProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <Client>
        <ClientUrlBar>{browserName}</ClientUrlBar>

        <ClientContentHeading
          visible={["partial", "loaded"].includes(clientState)}
        />
        <ClientContentImage
          visible={clientState === "loaded"}
          updated={updated}
        />

        <Emoji as={NonIneractiveIconSvg} visible={!interactive} />
        <Emoji as={EmojiSleepingSvg} visible={sleeping} />
        <Emoji as={EmojiLoadingSvg} visible={loading} spinning />
      </Client>

      <ClientServerConnection>
        <Dot target={["client"].includes(target) ? "client" : "server"} />
        <ResponseType>
          {responseTypes?.map?.((type) => {
            const Icon = FileIcons[type as keyof typeof FileIcons];
            return <File key={type}>{Icon ? <Icon /> : null}</File>;
          })}
        </ResponseType>
      </ClientServerConnection>

      <Server>
        <ServerIconSvg />
        <Emoji as={EmojiLoadingSvg} visible={target === "database"} spinning />
      </Server>

      <Database visible={target === "database"} />
    </Container>
  );
}

export { UserExperienceAnimation };
