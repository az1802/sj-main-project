'use strict';

const Controller = require('egg').Controller;

class TemplateController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, template';
  }
  async getTemplate() {
    const { ctx } = this;
    const Template = ctx.model.Template;

    // const res = await new Template({
    //   name: 'sj-cli-template-vue_a',
    //   version: '1.0.0',
    // }).save();
    const res = await Template.find({});
    console.log(res);
    ctx.body = res;
  }
}

module.exports = TemplateController;
