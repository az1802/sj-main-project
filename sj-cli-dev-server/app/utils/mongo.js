const { mongodbUrl, mongodbName } = require("../../config/db");
const Mongodb = require("@pick-star/cli-mongodb");
// const mongoose = require("mongoose");

function mongo() {
  // mongoose.connect(`mongodb://sunjie:27017/sj-cli`);
  // let dbHandle = mongoose.connection;
  // dbHandle.on("open", function (err) {
  //   if (err) {
  //     console.log("数据库连接失败");
  //     throw err;
  //   }
  //   console.log("数据库连接成功");
  // });

  return new Mongodb(mongodbUrl);
}
module.exports = mongo;
