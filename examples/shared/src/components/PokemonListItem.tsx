import { MouseEventHandler } from "react";

import { fixCasing } from "../utils/fixCasing";
import { styled } from "../utils/styling";

const Container = styled("a", {
  transition: "all .3s",
  width: "100%",
  aspectRatio: "1/1",
  position: "relative",
  background: "#ac1a1a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textDecoration: "none",

  "& img": {
    width: "4rem",
    height: "4rem",

    "@media (min-width: 50rem)": {
      width: "5rem",
      height: "5rem",
    },
  },

  "&:hover, &:focus": {
    background: "white",
    color: "black",
    transform: "scale(1.1)",
    zIndex: 10,
  },
});

const Name = styled("span", {
  position: "absolute",
  bottom: ".8rem",
  left: 0,
  right: 0,
  textAlign: "center",
  fontFamily: "Bebas Neue",
  fontSize: "1.2rem",
});

type PokemonListItemProps = {
  id: number;
  name: string;
  href?: string;
  onClick?: MouseEventHandler;
};

function PokemonListItem({ id, name, ...rest }: PokemonListItemProps) {
  const paddedId = id.toString().padStart(3, "0");
  return (
    <Container {...rest}>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`}
        loading="lazy"
        alt={name}
      />
      <Name>{fixCasing(name)}</Name>
    </Container>
  );
}

export { PokemonListItem };
