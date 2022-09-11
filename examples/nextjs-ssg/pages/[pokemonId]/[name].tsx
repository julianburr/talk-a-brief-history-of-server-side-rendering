import Link from "next/link";

import { PokemonDetails } from "shared";

import type { GetStaticPropsContext } from "next";

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

async function getStaticPaths() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const res = await fetch(url).then((res) => res.json());
    const results: { name: string }[] = res.results;
    return {
      paths: results.map((item, index) => ({
        params: { pokemonId: `${index + 1}`, name: item.name },
      })),
      fallback: false,
    };
  } catch (e) {
    return { paths: [], fallback: false };
  }
}

async function getStaticProps(context: GetStaticPropsContext) {
  try {
    const pokemonId = context.params?.pokemonId;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const res = await fetch(url).then((res) => res.json());
    return { props: { pokemonData: res } };
  } catch (e) {
    return { props: {} };
  }
}

export { getStaticPaths, getStaticProps };
export default DetailsPage;
