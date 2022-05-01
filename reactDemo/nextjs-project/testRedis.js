const Redis = require("ioredis");
const RedisStore = require("./server/session-store");

const redis = new Redis({
  port: 6379,
});

let sessionStore = new RedisStore(redis);

async function test() {
  let res = await sessionStore.set("a", "bbb", 3000);
  console.log("res: ", res);
}

test();
