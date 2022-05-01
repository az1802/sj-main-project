import React from "react";
import createReduxStore from "../store/store";
const isServer = typeof window === "undefined";
const __NEXT__REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState = {}) {
  if (isServer) {
    return createReduxStore(initialState);
  }
  if (!window.__NEXT__REDUX_STORE__) {
    window.__NEXT__REDUX_STORE__ = createReduxStore(initialState);
  }

  return window.__NEXT__REDUX_STORE__;
}

export default (Comp) => {
  class WithReduxStore extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      const { Component, ...rests } = this.props;
      return (
        <Comp
          Component={Component}
          reduxStore={this.reduxStore}
          {...rests}
        ></Comp>
      );
    }

    static getInitialProps = async (ctx) => {
      const { req } = ctx.ctx;
      const userInfo = req?.session?.userInfo || { name: "sunjie" }; //
      console.log("初始化请求中默认的userInfo: ", req.session);
      let appProps = {};
      if (Comp.getInitialProps) {
        appProps = await Comp.getInitialProps(ctx);
      }
      const reduxStore = getOrCreateStore({
        userInfo,
      });
      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    };
  }

  // TODO 为什么funciton模式不可以传递出reduxStore参数
  // function WithReduxStore(props) {
  //   console.log("func props: ", props);
  //   const { Component, pageProps = {}, ...rests } = props;
  //   return (
  //     <Comp
  //       Component={Component}
  //       reduxStore={props.reduxStore}
  //       {...pageProps}
  //       {...rests}
  //     ></Comp>
  //   );
  // }

  // WithReduxStore.getInitialProps = async (ctx) => {
  //   let appProps = {};
  //   if (Comp.getInitialProps) {
  //     appProps = await Comp.getInitialProps(ctx);
  //   }
  //   const reduxStore = getOrCreateStore();
  //   console.log("reduxStore: ", reduxStore);
  //   //IMPORT 这里的返回值会被序列会daozhi reduxStore里面的function全部丢失所以这里只获取store的初始值
  //   return {
  //     ...appProps,
  //     reduxStore,
  //     initialReduxState: reduxStore.getState(),
  //   };
  // };

  return WithReduxStore;
};
