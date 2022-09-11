import { Screen } from "~/components/Screen";

import { Keyboard } from "./Keyboard";
import { Monitor } from "./Monitor";
import { Mouse } from "./Mouse";
import { Tower } from "./Tower";

type ComputerProps = {
  slide: number;
  evolution: number;
};

function Computer({ slide, evolution }: ComputerProps) {
  return (
    <>
      <Monitor evolution={evolution}>
        <Screen slide={slide} evolution={evolution} />
      </Monitor>
      <Tower evolution={evolution} />
      <Keyboard evolution={evolution} />
      <Mouse evolution={evolution} />
    </>
  );
}

export { Computer };
