import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        );
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };
    }
    render() { 
        return (
            <Html>
              <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;300;600&display=swap" rel="stylesheet"></link>
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          )
    }
}

