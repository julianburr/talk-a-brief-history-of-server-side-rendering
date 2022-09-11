import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { PokemonDetails } from "../../../../shared";

import type { LoaderArgs } from "@remix-run/node";

type DetailsPageData = {
  pokemonData: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: { type: { name: string } }[];
    abilities: { ability: { name: string } }[];
  };
};

function DetailsPage() {
  const { pokemonData } = useLoaderData<DetailsPageData>();
  return (
    <PokemonDetails
      id={pokemonData.id.toString()}
      data={pokemonData}
      backlink={<Link to="/">← Back to list</Link>}
    />
  );
}

async function loader({ params }: LoaderArgs) {
  try {
    const pokemonId = params?.pokemonId;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const res = await fetch(url).then((res) => res.json());
    return json({ pokemonData: res });
  } catch (e) {
    return json({ pokemonData: null });
  }
}

export { loader };
export default DetailsPage;
