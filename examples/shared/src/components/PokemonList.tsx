import { LoadingSpinner } from "./LoadingSpinner";
import { styled } from "../utils/styling";

import type { ComponentType } from "react";

const List = styled("ul", {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(auto-fill, minmax(8rem, 1fr))",
  gap: ".6rem",
});

const ListItem = styled("li", {
  display: "flex",
  margin: 0,
  padding: 0,
});

type PokemonListProps<Data = any> = {
  loading?: boolean;
  items: Data[];
  Item: ComponentType<{ data: Data; index: number }>;
};

function PokemonList<Data = any>({
  loading,
  items,
  Item,
}: PokemonListProps<Data>) {
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <List>
      {items?.map((data, index) => (
        <ListItem key={index}>
          <Item key={index} data={data} index={index} />
        </ListItem>
      ))}
    </List>
  );
}

export { PokemonList };
