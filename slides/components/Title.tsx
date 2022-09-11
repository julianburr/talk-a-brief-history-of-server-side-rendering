import { styled } from "~/utils/styling";

const Heading = styled("h1", {
  transition: "all .4s",
  transitionDelay: ".1s",
  position: "absolute",
  bottom: "105vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "80vh",
  margin: "0 auto",
  textAlign: "center",
  fontSize: "15vh",
  fontFamily: "Bebas Neue",
  lineHeight: 1.1,

  variants: {
    visible: {
      true: {
        bottom: "34vh",
      },
    },
  },
});

const Meta = styled("span", {
  transition: "all .4s",
  position: "absolute",
  bottom: "105vh",
  left: 0,
  right: 0,
  width: "100%",
  maxWidth: "80vh",
  margin: "0 auto",
  textAlign: "center",
  fontSize: "6vh",
  fontFamily: "Bebas Neue",
  color: "$wall",

  variants: {
    visible: {
      true: {
        bottom: "5vh",
      },
    },
  },
});

type TitleSlideProps = {
  slide: number;
};

function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <>
      <Meta visible={slide === 0}>@jburr90</Meta>
      <Heading visible={slide === 0}>
        Server side rendering with React in 2022
      </Heading>
    </>
  );
}

export { TitleSlide };
