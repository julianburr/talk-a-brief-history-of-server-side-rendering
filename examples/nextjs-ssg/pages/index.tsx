import fetch from "node-fetch";
import { useRouter } from "next/router";

import { PokemonList, PokemonListItem } from "shared";

type ListPageProps = {
  pokemon: {
    name: string;
    url: string;
  }[];
};

function ListPage({ pokemon }: ListPageProps) {
  const { push } = useRouter();

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
              push(`/${id}/${data.name}`);
            }}
          />
        );
      }}
    />
  );
}

async function getStaticProps() {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=151";
    const res = await fetch(url).then((res) => res.json());
    return { props: { pokemon: res.results } };
  } catch (e) {
    return { props: { pokemon: [] } };
  }
}

export { getStaticProps };
export default ListPage;
