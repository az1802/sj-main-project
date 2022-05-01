import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originRenderPage = ctx.renderPage;
    const styleSheet = new ServerStyleSheet();

    try {
      ctx.renderPage = () =>
        originRenderPage({
          enchanceApp: (App) => (props) =>
            styleSheet.collectstyles(<App {...props}></App>),
        });

      const props = await Document.getInitialProps(ctx);

      return {
        ...props,
        styles: (
          <>
            {props.styles}
            {styleSheet.getStyleElement}
          </>
        ),
      };
    } finally {
      styleSheet.seal();
    }
  }

  // render() {
  //   return (
  //     <Html>
  //       <Head />
  //       <title>MyApp</title>
  //       <style>{`.test {color:red}`}</style>
  //       <body>
  //         <Main />
  //         <NextScript />
  //       </body>
  //     </Html>
  //   );
  // }
}

export default MyDocument;
