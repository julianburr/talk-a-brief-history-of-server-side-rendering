import { styled } from "../utils/styling";

const Tags = styled("span", {
  display: "inline-flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: ".2rem",
});

const Tag = styled("span", {
  display: "inline-flex",
  padding: ".3rem .6rem",
  background: "#eee",
});

export { Tags, Tag };
