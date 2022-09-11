import { Link, useParams } from "react-router-dom";

import { useFetch, PokemonDetails } from "shared";

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
};

function DetailsPage() {
  const { pokemonId } = useParams();

  const pokemon = useFetch<Pokemon>(() =>
    window.fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  );

  return (
    <PokemonDetails
      id={pokemonId as string}
      data={pokemon.data}
      loading={pokemon.loading}
      backlink={<Link to="/">← Back to list</Link>}
    />
  );
}

export { DetailsPage };
