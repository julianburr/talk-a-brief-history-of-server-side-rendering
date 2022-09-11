import { useEffect, useRef, useState } from "react";
import { flatContent } from "~/utils/content";
import { keyframes, styled } from "~/utils/styling";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  background: "$screen",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Bebas Neue",
  padding: "3vh",
  textAlign: "center",
  transition: "all .4s",

  variants: {
    loading: {
      true: {
        background: "black",
        "& *": {
          display: "none",
        },
      },
    },
  },
});

type ScreenProps = {
  slide: number;
  evolution: number;
};

function Screen({ slide, evolution }: ScreenProps) {
  const [showEvolution, setShowSlide] = useState(slide);
  const [loading, setLoading] = useState(false);

  const timer = useRef<NodeJS.Timer>();
  const lastEvolution = useRef(evolution);

  useEffect(() => {
    clearTimeout(timer.current);
    if (lastEvolution.current !== evolution) {
      setLoading(true);
      lastEvolution.current = evolution;
      timer.current = setTimeout(() => {
        setShowSlide(slide);
        setLoading(false);
      }, 600);
    } else {
      setShowSlide(slide);
      setLoading(false);
    }
  }, [evolution, slide]);

  return (
    <Container loading={loading}>{flatContent[showEvolution - 1]}</Container>
  );
}

export { Screen };
