import Document, { Html, Head, Main, NextScript } from 'next/document';

// Example critical CSS string
// In a real project, this would be dynamically imported or defined elsewhere
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

         
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          
          <link
            rel="stylesheet"
            href="//fonts.googleapis.com/css?family=Playfair+Display"
            media="print"
            onLoad={(event) => {
					//access the currentTarget and set its media to 'all'
					event.currentTarget.media = 'all';
				 }}
          />
          <noscript>
            <link
              rel="stylesheet"
              href="//fonts.googleapis.com/css?family=Playfair+Display"
            />
          </noscript>

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
            media="print"
            onLoad={(event) => {
					//access the currentTarget and set its media to 'all'
					event.currentTarget.media = 'all';
				 }}
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap"
            />
          </noscript>
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
