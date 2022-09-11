import classnames from "classnames";
import { styled } from "~/utils/styling";

const Container = styled("div", {
  transition: "all 0.4s",
  transitionDelay: "0.1s",
  position: "absolute",
  bottom: "-100vh",
  left: "calc(50% - 30vh)",
  width: "60vh",
  height: "3vh",
  background: "$computerOld",
  borderRadius: "2vh 2vh 0 0",

  "&.level1, &.level2, &.level3, &.level4": {
    bottom: "1vh",
  },

  "&.level2, &.level3": {
    left: "calc(50% - 22vh)",
  },

  "&.level3, &.level4": {
    bottom: "2vh",
    height: "3vh",
    borderRadius: "1.5vh 1.5vh 0 0",
    background: "$computerNormal",
  },

  "&.level4": {
    height: "2vh",
    borderRadius: "1vh 1vh 0 0",
    background: "$computerModern",
  },
});

const Keys = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  top: "-1.4vh",
  height: "1.4vh",
  left: "5%",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 4fr 1fr 1fr 1fr 1fr",
  gap: "0.8vh",

  "& > div": {
    width: "100%",
    height: "100%",
    background: "$black",
    borderRadius: "0.3vh 0.3vh 0 0",
  },

  ".level3 &, .level4 &": {
    top: "-0.8vh",
    height: "0.8vh",
  },
});

type KeyboardProps = {
  evolution: number;
};

function Keyboard({ evolution }: KeyboardProps) {
  return (
    <Container
      className={classnames({
        level1: evolution === 1,
        level2: evolution === 2,
        level3: evolution === 3,
        level4: evolution === 4,
      })}
    >
      <Keys>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Keys>
    </Container>
  );
}

export { Keyboard };
