/* eslint-disable react/jsx-key */
import { FileZillaAnimation } from "~/components/animations/FileZillaAnimation";

const fileZillaAnimation = [1, 2, 3, 4, 5].map((part) => (
  <FileZillaAnimation part={part} />
));

export { fileZillaAnimation };
