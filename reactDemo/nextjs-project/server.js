const next = require("next");
const Koa = require("koa");
const Session = require("koa-session");

const Redis = require("ioredis");
const RedisStore = require("./server/session-store");
const redis = new Redis({
  port: 6379,
});

const router = require("./serverRouter");

const dev = process.env.NODE_ENV != "production";
const app = next({ dev });
const handle = app.getRequestHandler();
let index = 0;

function useSession(server) {
  server.keys = ["sunjie devlop github apt"];
  const SESSION_CONFIG = {
    key: "sid",
    store: new RedisStore(redis),
  };
  server.use(Session(SESSION_CONFIG, server));
}

app.prepare().then(() => {
  const server = new Koa();

  useSession(server);

  server.use(router.routes());

  server.use(async (ctx, next) => {
    ctx.req.session = {
      userInfo: ctx.session.userInfo,
    };

    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.listen(3000, () => {
    console.log("listen 3000");
  });
});
