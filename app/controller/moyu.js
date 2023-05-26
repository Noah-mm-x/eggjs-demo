const BaseController = require('../controller/baseController');
const getTxt = require('../libs/dateHander');
class MoyuController extends BaseController {
  async logs() {
    const data = { data: getTxt() };
    this.success(data);
  }
}

module.exports = MoyuController;
