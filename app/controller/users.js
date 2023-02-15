'use strict';

const { Controller } = require('egg');

class UsersController extends Controller {
  async list() {
    const { ctx } = this;
    ctx.body = 'users list';
  }
  async detail() {
    const { ctx } = this;
    ctx.body = 'users detail';
  }
}

module.exports = UsersController;
