const BaseController = require('../controller/baseController');
class testController extends BaseController {
  async list() {
    const data = { a: 1 };
    this.success(data);
  }
}
module.exports = testController;
