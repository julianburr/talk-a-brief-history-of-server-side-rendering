import classnames from "classnames";
import { PropsWithChildren } from "react";
import { Screen } from "~/components/Screen";
import { styled } from "~/utils/styling";

const Container = styled("div", {
  transition: "all 0.4s",
  display: "flex",
  width: "68vh",
  height: "62vh",
  background: "$computerOld",
  borderRadius: "3vh",
  position: "absolute",
  bottom: "-70vh",
  left: "calc(50% - 34vh)",

  "&.level1, &.level2, &.level3, &.level4": {
    bottom: "37vh",
  },

  "&.level2": {
    width: "80vh",
    height: "76vh",
    bottom: "14vh",
    left: "calc(50% - 22vh)",
  },

  "&.level3, &.level4": {
    width: "85vh",
    height: "70vh",
    bottom: "24vh",
    left: "calc(50% - 22vh)",
    background: "$computerNormal",
  },

  "&.level4": {
    width: "100vh",
    left: "calc(50% - 50vh)",
    height: "74vh",
    background: "$computerModern",
  },
});

const WrapScreen = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  inset: "8vh",
  background: "$black",
  borderRadius: "2vh",
  overflow: "hidden",

  ".level2 &": {
    bottom: "11vh",
  },

  ".level3 &": {
    inset: "4vh",
    borderRadius: "1.5vh",
  },

  ".level4 &": {
    inset: "2vh",
    bottom: "6vh",
    borderRadius: "1.5vh",
  },
});

const Stand = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  bottom: "-0.5vh",
  height: 0,
  width: 0,
  left: "50%",
  borderRadius: "1.5vh",
  background: "$computerOld",

  "&:before": {
    transition: "all 0.4s",
    position: "absolute",
    content: '" "',
    bottom: 0,
    left: "50%",
    width: 0,
    height: 0,
    background: "$computerOld",
  },

  ".level2 &": {
    bottom: "-4.5vh",
    height: "4vh",
    width: "60%",
    left: "20%",
  },

  ".level3 &, .level4 &": {
    height: "10vh",
    width: "6vh",
    bottom: "-10.5vh",
    background: "$black",
    left: "calc(50% - 3vh)",
    borderRadius: "0.6vh",

    "&:before": {
      width: "16vh",
      left: "calc(50% - 8vh)",
      height: "1vh",
      borderRadius: "0.6vh 0.6vh 0 0",
      background: "$black",
    },
  },

  ".level4 &": {
    width: "20vh",
    left: "calc(50% - 10vh)",

    "&:before": {
      width: "24vh",
      left: "calc(50% - 12vh)",
    },
  },
});

type MonitorProps = PropsWithChildren<{
  evolution: number;
}>;

function Monitor({ evolution, children }: MonitorProps) {
  return (
    <Container
      className={classnames({
        level1: evolution === 1,
        level2: evolution === 2,
        level3: evolution === 3,
        level4: evolution === 4,
      })}
    >
      <WrapScreen>{children}</WrapScreen>
      <Stand />
    </Container>
  );
}

export { Monitor };
