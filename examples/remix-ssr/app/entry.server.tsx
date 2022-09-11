import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import ReactDOMServer from "react-dom/server";

import { getCssText } from "../../shared";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  let markup = ReactDOMServer.renderToString(
    <RemixServer context={remixContext} url={request.url} />
  );

  markup = markup.replace(/__STYLES__/, `<style>${getCssText()}</style>`);

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      "Content-Type": "text/html",
    },
  });
}
