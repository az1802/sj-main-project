'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, ';
  }
  getTemplate() {
    const { ctx } = this;
    ctx.body = 'template下载';
  }
}

module.exports = ProjectController;
