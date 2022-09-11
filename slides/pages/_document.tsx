import { Head, Html, Main, NextScript } from "next/document";
import { getCssText } from "~/utils/styling";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />

        {/**
         * Add server side generated styles
         * https://stitches.dev/docs/server-side-rendering
         */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
