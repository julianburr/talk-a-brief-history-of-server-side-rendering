import { Tag } from "./Tag";
import { fixCasing } from "../utils/fixCasing";

const colorMap = {
  grass: "#EBFACD",
  fire: "#FED9C4",
  poison: "#EBE1FF",
  water: "#CDF2FA",
  ice: "#E1FBFF",
  psychic: "#FEE1FF",
  ground: "#F8F4E9",
  bug: "#E1F0C1",
  electric: "#FBF5BD",
};

type TypeTagProps = {
  type: string;
};

function TypeTag({ type }: TypeTagProps) {
  const background = colorMap[type as keyof typeof colorMap] || "#eee";
  return <Tag css={{ background }}>{fixCasing(type)}</Tag>;
}

export { TypeTag };
