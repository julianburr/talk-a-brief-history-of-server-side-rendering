/* eslint-disable react/jsx-key */
import { StaticGenerationAnimation } from "~/components/animations/StaticGenerationAnimation";

const staticGenerationAnimation = [1, 2, 3, 4].map((part) => (
  <StaticGenerationAnimation part={part} />
));

export { staticGenerationAnimation };
