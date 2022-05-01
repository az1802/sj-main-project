const Router = require("koa-router");
const router = new Router();
const config = require("./config");
const axios = require("axios");

router.get("/a/:id", async (ctx) => {
  const id = ctx.params.id;
  console.log("id----", id);
  await handle(ctx.req, ctx.res, {
    pathname: "/a",
    query: { id },
  });

  ctx.respond = false;
});

router.get("/user/set", async (ctx) => {
  if (!ctx.session.user) {
    ctx.session.user = {
      name: "sunjie",
      age: 19,
    };
  } else {
    console.log(ctx.session.user);
  }
  ctx.body = "set user success";
});

router.get("/user/del", async (ctx) => {
  ctx.session = null;
  ctx.body = "del user success";
});

router.get("/auth", async (ctx) => {
  let code = ctx.query.code;
  console.log("code: ", code);
  if (code) {
    let data = {
      client_id: config.github.client_id,
      client_secret: config.github.client_secret,
      code,
    };
    console.log("data: ", data);
    const result = await axios({
      method: "POST",
      url: "https://github.com/login/oauth/access_token",
      data,
      headers: {
        Accept: "application/json",
      },
    });
    console.log("result.data: ", result.data);
    if (result.status === 200) {
      ctx.session.githubAuth = result.data;

      const { access_token, token_type } = result.data;
      const usetInfoResp = await axios({
        method: "GET",
        url: "https://api.github.com/user",
        headers: {
          Authorization: `${token_type} ${access_token}`,
        },
      });
      ctx.session.userInfo = usetInfoResp.data;
      ctx.redirect("/");
    }
  }
});

router.get("/user/info", (ctx) => {
  const userInfo = ctx?.session?.userInfo;
  if (!userInfo) {
    ctx.status = 401;
    ctx.body = "need login";
  } else {
    ctx.body = userInfo;
    ctx.set("Content-Type", "application/json");
  }
});

router.post("/logout", async (ctx, next) => {
  console.log(ctx.params);
  ctx.session = null;
  ctx.body = "logout success";
});

module.exports = router;
