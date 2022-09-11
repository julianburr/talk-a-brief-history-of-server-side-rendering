import { ReactNode } from "react";

import { styled } from "../utils/styling";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: ".2rem",
});

const Label = styled("span", {
  fontWeight: 800,
  fontSize: ".6rem",
  textTransform: "uppercase",
});

const Value = styled("span", {});

type StatProps = {
  label: string;
  value?: ReactNode;
};

function Stat({ label, value }: StatProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <Value>{value || "—"}</Value>
    </Container>
  );
}

export { Stat };
