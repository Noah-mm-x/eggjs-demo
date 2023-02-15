'use strict';

const { Controller } = require('egg');

class NewsController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'news list';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = 'news detail';
  }
}

module.exports = NewsController;
