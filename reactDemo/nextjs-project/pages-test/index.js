import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import getConfig from "next/config";
import axios from "axios";
import { useEffect } from "react";

const { publicRuntimeConfig } = getConfig();

function navgateTo() {
  Router.push(
    {
      pathname: "/a",
      query: {
        id: 2,
      },
    },
    "/a/2"
  );
}

export default () => {
  useEffect(async () => {
    let res = await axios.get("/user/info");
    console.log("res: ", res);
  }, []);
  return (
    <>
      <Button type="primary" onClick={navgateTo}>
        hello world 123
      </Button>
      <span>test</span>
      <a href={publicRuntimeConfig.OAUTH_URL}>登录</a>
    </>
  );
};
