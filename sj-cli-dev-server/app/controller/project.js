"use strict";

const Controller = require("egg").Controller;
const mongo = require("../utils/mongo");
class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await mongo().query("template");
    ctx.body = data;
  }
}

module.exports = ProjectController;
