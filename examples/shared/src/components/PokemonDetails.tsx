import { ReactNode } from "react";

import { Stat } from "./Stat";
import { Tag, Tags } from "./Tag";
import { TypeTag } from "./TypeTag";
import { LoadingSpinner } from "./LoadingSpinner";
import { fixCasing } from "../utils/fixCasing";
import { styled } from "../utils/styling";

const Container = styled("main", {
  width: "100%",
  maxWidth: "60rem",
  background: "white",
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "2rem",
  position: "relative",

  "@media (min-width: 50rem)": {
    gridTemplateColumns: "1fr 1fr",
  },
});

const WrapImage = styled("div", {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f5f5f5",
  padding: "4rem 0 2rem",

  "& img": {
    width: "80%",
    height: "auto",
    aspectRatio: "1/1",
  },

  "@media (min-width: 50rem)": {
    "& img": {
      width: "60%",
    },
  },
});

const Details = styled("div", {
  width: "100%",
  overflow: "auto",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "& h1": {
    fontFamily: "Bebas Neue",
    margin: 0,
    padding: 0,
    fontSize: "3em",
  },
});

const WrapBacklink = styled("div", {
  position: "absolute",
  top: "1.5rem",
  left: "1.5rem",

  "& a": {
    fontFamily: "Bebas Neue",
    color: "inherit",
    textDecoration: "none",

    "&:hover, &:focus": {
      textDecoration: "underline",
    },
  },
});

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
};

type PokemonDetailsProps = {
  loading?: boolean;
  id: string;
  data?: Pokemon | null;
  backlink?: ReactNode;
};

function PokemonDetails({ loading, id, data, backlink }: PokemonDetailsProps) {
  const paddedId = id?.toString().padStart(3, "0");

  return (
    <Container>
      {backlink && <WrapBacklink>{backlink}</WrapBacklink>}

      <WrapImage>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`}
        />
      </WrapImage>

      <Details>
        {loading ? (
          <LoadingSpinner />
        ) : data ? (
          <>
            <h1>{fixCasing(data.name)}</h1>

            <Stat
              label="Types"
              value={
                <Tags>
                  {data.types.map((t) => (
                    <TypeTag key={t.type.name} type={t.type.name} />
                  ))}
                </Tags>
              }
            />
            <Stat
              label="Abilities"
              value={
                <Tags>
                  {data.abilities.map((a) => (
                    <Tag key={a.ability.name}>{fixCasing(a.ability.name)}</Tag>
                  ))}
                </Tags>
              }
            />
            <Stat
              label="Height"
              value={data.height ? `${data.height * 10}cm` : undefined}
            />
            <Stat
              label="Weight"
              value={data.weight ? `${data.weight / 100}kg` : undefined}
            />
          </>
        ) : null}
      </Details>
    </Container>
  );
}

export { PokemonDetails };
