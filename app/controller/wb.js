const { Controller } = require('egg');
const formatDate = require('../libs/dateFormat');
class WbHotController extends Controller {
  async hot() {
    const { ctx, service } = this;
    const hotList = await service.wb.getAll();
    // console.log('hotList', hotList);
    // ctx.body = hotList;
    hotList.forEach(item => {
      item.date = formatDate(item.onboard_time);
    });
    // console.log(hotList);
    await ctx.render('hot.ejs', { hotList });
  }
}
module.exports = WbHotController;
