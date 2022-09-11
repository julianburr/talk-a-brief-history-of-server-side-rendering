import { styled } from "~/utils/styling";

import CoffeeMugSvg from "~/assets/coffee-mug.svg";
import CoffeeCupSvg from "~/assets/coffee-cup.svg";

const CoffeeMug = styled(CoffeeMugSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "24vh",
  height: "auto",

  variants: {
    visible: {
      true: {
        bottom: "1vh",
      },
    },
    left: {
      true: {
        left: "-40vh",
      },
    },
  },
});

const CoffeeCup = styled(CoffeeCupSvg, {
  position: "absolute",
  bottom: "-50vh",
  left: "calc(50% - 60vh)",
  transition: "bottom .6s, left .4s",
  width: "30vh",
  height: "auto",

  variants: {
    visible: {
      true: {
        bottom: "2.5vh",
      },
    },
    left: {
      true: {
        left: "calc(50% - 68vh)",
      },
    },
  },
});

type CofeeProps = {
  slide: number;
  evolution: number;
};

function Coffee({ evolution }: CofeeProps) {
  return (
    <>
      <CoffeeMug visible={evolution >= 1} left={evolution >= 3} />
      <CoffeeCup visible={evolution >= 3} left={evolution >= 4} />
    </>
  );
}

export { Coffee };
