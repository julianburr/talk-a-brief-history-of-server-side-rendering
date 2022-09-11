import { styled } from "~/utils/styling";

import PlantSvg from "~/assets/plant.svg";

const PlantIllustation = styled(PlantSvg, {
  position: "absolute",
  left: "calc(50% + 40vh)",
  width: "60vh",
  height: "auto",
  bottom: "-200vh",
  transition: "bottom .8s, left .4s",

  "& #leave1, & #leave2, & #leave3, & #leave4, & #leave5": {
    transition: "all .4s ease-in-out",
    transformOrigin: "bottom center",
  },

  variants: {
    visible: {
      true: {
        bottom: "13vh",
      },
    },

    right: {
      true: {
        left: "105%",
      },
    },

    size: {
      small: {
        left: "calc(50% + 40vh)",

        "& #leave3": {
          scale: 0.55,
        },

        "& #leave1, & #leave2": {
          scale: 0.5,
        },

        "& #leave4, & #leave5": {
          scale: 0.4,
        },
      },
      large: {
        left: "calc(50% + 63vh)",
      },
    },
  },
});

type PlantProps = {
  slide: number;
  evolution: number;
};

function Plant({ evolution }: PlantProps) {
  return (
    <PlantIllustation
      visible
      right={evolution >= 3}
      size={evolution <= 1 ? "small" : "large"}
    />
  );
}

export { Plant };
