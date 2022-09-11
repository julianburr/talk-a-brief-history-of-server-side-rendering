import { styled } from "../utils/styling";

// const jump = keyframes({
//   "0%": { transform: "translateY(0)" },
//   "15%": { transform: "translateY(-.3rem)" },
//   "30%": { transform: "translateY(0)" },
//   "100%": { transform: "translateY(0)" },
// });

const Container = styled("div", {
  display: "flex",
  flexDirection: "row",
  fontSize: "1.6rem",
  fontFamily: "Bebas Neue",
  color: "rgba(0, 0, 0, 0.15)",
  alignSelf: "center",
  justifyContent: "center",
  padding: "2rem 0",
});

const Dots = styled("span", {
  "& :nth-child(2)": {
    animationDelay: ".1s",
  },

  "& :nth-child(3)": {
    animationDelay: ".2s",
  },
});

const Dot = styled("span", {
  display: "inline-flex",
  // animation: `${jump} 1.5s infinite`,
});

function LoadingSpinner() {
  return (
    <Container>
      <span>Loading</span>
      <Dots>
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </Dots>
    </Container>
  );
}

export { LoadingSpinner };
