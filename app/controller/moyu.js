const BaseController = require('../controller/baseController');
const getTxt = require('../libs/dateHander');
class testController extends BaseController {
  async logs() {
    const data = { data: getTxt() };
    this.success(data);
  }
}

module.exports = testController;
