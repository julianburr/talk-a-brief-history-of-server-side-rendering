import Link from "next/link";

import { PokemonDetails } from "shared";

import type { GetServerSidePropsContext } from "next";

type DetailsPageProps = {
  pokemonData: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
  };
};

function DetailsPage({ pokemonData }: DetailsPageProps) {
  return (
    <PokemonDetails
      id={pokemonData.id.toString()}
      data={pokemonData}
      backlink={<Link href="/">← Back to list</Link>}
    />
  );
}

async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const pokemonId = context.params?.pokemonId;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const res = await fetch(url).then((res) => res.json());
    return { props: { pokemonData: res } };
  } catch (e) {
    return { props: {} };
  }
}

export { getServerSideProps };
export default DetailsPage;
