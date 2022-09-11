import classnames from "classnames";
import { styled } from "~/utils/styling";

const Container = styled("div", {
  transition: "all .4s",
  position: "absolute",
  bottom: "-60vh",
  left: "calc(50% - 40vh)",
  width: "80vh",
  height: "26vh",
  background: "$computerOld",
  borderRadius: "3vh",

  "&.level1, &.level2, &.level3, &.level4": {
    bottom: "10vh",
  },

  "&.level2, &.level3, &.level4": {
    left: "calc(50% - 60vh)",
    bottom: "10vh",
    width: "35vh",
    height: "85vh",
  },

  "&.level3": {
    background: "$computerNormal",
  },

  "&.level4": {
    left: "-40vh",
  },
});

type TowerProps = {
  evolution: number;
};

function Tower({ evolution }: TowerProps) {
  return (
    <Container
      className={classnames({
        level1: evolution === 1,
        level2: evolution === 2,
        level3: evolution === 3,
        level4: evolution === 4,
      })}
    />
  );
}

export { Tower };
