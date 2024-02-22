import Document, { Html, Head, Main, NextScript } from 'next/document';

const criticalCss = `
  /* Your critical CSS here */
  body { margin: 0; font-family: 'League Spartan', sans-serif; }
  /* Other critical styles */
`;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Inline critical CSS */}
          <style dangerouslySetInnerHTML={{ __html: criticalCss }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
