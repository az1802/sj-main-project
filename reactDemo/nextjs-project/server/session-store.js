function getSessionById(id) {
  return `sid:${id}`;
}

class RedisSessionStore {
  constructor(client) {
    this.client = client;
  }
  async get(id) {
    console.log("get session", id);
    let ssid = getSessionById(id);
    let data = await this.client.get(ssid);
    if (data) {
      try {
        const result = JSON.parse(data);
        return result;
      } catch (error) {
        console.error(error);
      }
    }
    return null;
  }
  async set(id, sess, ttl) {
    console.log("set session", id, sess);
    let ssid = getSessionById(id);
    if (typeof ttl == "number") {
      ttl = Math.ceil(ttl / 1000);
    }

    if (ttl) {
      this.client.setex(ssid, ttl, JSON.stringify(sess));
    } else {
      this.client.set(ssid, JSON.stringify(sess));
    }
  }
  async destroy(id) {
    console.log("del session", id);
    let ssid = getSessionById(id);
    await this.client.del(ssid);
  }
}

module.exports = RedisSessionStore;
