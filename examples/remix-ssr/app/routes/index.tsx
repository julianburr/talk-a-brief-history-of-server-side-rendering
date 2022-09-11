import fetch from "node-fetch";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";

import { PokemonList, PokemonListItem } from "../../../shared";

type ListPageData = {
  pokemon: {
    name: string;
    url: string;
  }[];
};

function ListPage() {
  const navigate = useNavigate();
  const { pokemon } = useLoaderData<ListPageData>();

  return (
    <PokemonList
      items={pokemon}
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

async function loader() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const res = await fetch(url).then((res) => res.json());
    return json({ pokemon: res.results });
  } catch (e) {
    return json({ pokemon: [] });
  }
}

export { loader };
export default ListPage;
