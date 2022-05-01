import "../index.css";
import "antd/dist/antd.css";
import App from "next/app";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import WithReduxStore from "../lib/with-redux";

class MyApp extends App {
  static async getInitialProps(ctx) {
    const { Component } = ctx;
    let props = {};
    if (Component.getInitialProps) {
      props = await Component.getInitialProps(ctx);
    }
    return props;
  }

  render() {
    let { Component, reduxStore, ...pageProps } = this.props;
    return (
      <Provider store={reduxStore}>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </Provider>
    );
  }
}

export default WithReduxStore(MyApp);
