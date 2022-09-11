import { useNavigate } from "react-router-dom";

import { useFetch, PokemonList, PokemonListItem } from "shared";

type PokemonResponse = {
  results: {
    name: string;
    url: string;
  }[];
};

function ListPage() {
  const navigate = useNavigate();

  const list = useFetch<PokemonResponse>(() =>
    window.fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  );

  return (
    <PokemonList
      loading={list.loading}
      items={list.data?.results || []}
      Item={({ data, index }) => {
        const id = index + 1;
        return (
          <PokemonListItem
            id={id}
            name={data.name}
            href={`/${id}/${data.name}`}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/${id}/${data.name}`);
            }}
          />
        );
      }}
    />
  );
}

export { ListPage };
