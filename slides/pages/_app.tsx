import { Computer } from "~/components/computer";
import { Books } from "~/components/objects/Books";
import { Coffee } from "~/components/objects/Coffee";
import { Plant } from "~/components/objects/Plant";
import { TitleSlide } from "~/components/Title";
import { globalCss, styled } from "~/utils/styling";
import { useSlide } from "~/utils/useSlide";

const globalStyles = globalCss({
  "body, html": {
    margin: 0,
    padding: 0,
  },

  "*, *:before, *:after": {
    boxSizing: "border-box",
  },
});

const Container = styled("div", {
  position: "fixed",
  inset: 0,
  background: "$wall",
});

const Desk = styled("div", {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "20vh",
  background: "$desk",
});

function MyApp() {
  globalStyles();

  const { slide, evolution } = useSlide();

  return (
    <Container>
      <Desk />
      <TitleSlide slide={slide} />

      <Books evolution={evolution} />
      <Computer slide={slide} evolution={evolution} />

      <Plant slide={slide} evolution={evolution} />
      <Coffee slide={slide} evolution={evolution} />
    </Container>
  );
}

export default MyApp;
