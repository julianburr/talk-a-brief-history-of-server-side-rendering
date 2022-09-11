import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

// NOTE: this is using react dom instead of Remix's `hydrateRoot`, because Remix
// doesn't work if you have any browser extensions that manipulate the DOM :/
// https://github.com/remix-run/remix/issues/2570#issuecomment-1099696456
hydrate(<RemixBrowser />, document);
