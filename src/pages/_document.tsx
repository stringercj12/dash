import Document, { Head, Html, Main, NextScript } from "next/document";
import CssBaseline from "@mui/material/CssBaseline";

export default class _Document extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <body>
          <CssBaseline />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
