import classnames from "classnames";
import { styled } from "~/utils/styling";

const Container = styled("div", {
  transition: "all 0.4s",
  transitionDelay: "0.1s",
  position: "absolute",
  bottom: "-100vh",
  left: "calc(50% + 32vh)",
  width: "14vh",
  height: "5vh",
  background: "$computerOld",
  borderRadius: "3vh 3vh 0 0",

  "&.level1, &.level2, &.level3, &.level4": {
    bottom: "1vh",
  },

  "&.level2, &.level3": {
    left: "calc(50% + 42vh)",
  },

  "&.level3, &.level4": {
    bottom: "2vh",
    height: "4vh",
    background: "$computerNormal",
  },

  "&.level4": {
    height: "3vh",
    background: "$computerModern",
  },
});

const Thumbs = styled("div", {
  transition: "all 0.4s",
  position: "absolute",
  top: "-0.4vh",
  left: "27%",
  width: " 46%",
  height: "0.4vh",
  display: "grid",
  gridTemplateColumns: " 1fr 1fr",
  gap: "0.2vh",

  "& > div": {
    width: "100%",
    height: "100%",
    background: "$black",

    "&:first-child": {
      borderRadius: "0.4vh 0 0 0",
    },

    "&:last-child": {
      borderRadius: "0 0.4vh 0 0",
    },
  },

  ".level4 &": {
    gap: "0vh",
  },
});

type MouseProps = {
  evolution: number;
};

function Mouse({ evolution }: MouseProps) {
  return (
    <Container
      className={classnames({
        level1: evolution === 1,
        level2: evolution === 2,
        level3: evolution === 3,
        level4: evolution === 4,
      })}
    >
      <Thumbs>
        <div />
        <div />
      </Thumbs>
    </Container>
  );
}

export { Mouse };
