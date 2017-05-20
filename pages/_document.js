import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head } = renderPage();
    return { html, head };
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
