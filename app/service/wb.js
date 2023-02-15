const { Service } = require('egg');
class WbService extends Service {
  async getAll() {
    const { ctx } = this;
    const newsResult = await ctx.curl('https://weibo.com/ajax/statuses/hot_band');
    // console.log('newsResult', newsResult);
    const res = JSON.parse(newsResult.data);
    // console.log('res', res);
    if (res.ok === 1 && res.http_code === 200) {
      return res.data.band_list;
    }
    return '错误';
  }
}
module.exports = WbService;
