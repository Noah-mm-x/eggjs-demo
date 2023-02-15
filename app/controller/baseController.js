const { Controller } = require('egg');
class BaseController extends Controller {
  get user() {
    const { ctx } = this;
    console.log(ctx.session);
  }
  success(data) {
    const { ctx } = this;
    ctx.body = {
      success: true,
      data,
    };
  }
  notFound(msg) {
    const { ctx } = this;
    ctx.throw(404, msg || 'not found');
  }
}
module.exports = BaseController;
