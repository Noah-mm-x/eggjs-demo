const fs = require('fs');
const path = require('path');
const { Controller } = require('egg');
console.log('Controller', Controller);
const { resolve } = require('path');
const url = resolve('./app/controller');
console.log(url);
class DownloadController extends Controller {
  async index() {
    this.ctx.body = [
      '<a download href="/download-css">download</a>',
      '<br>',
      '<a download href="/download-image">download image</a>',
    ].join('');
  }

  async downloadCss() {
    const filePath = path.resolve(this.app.config.static.dir, `${url}/hello.txt`);
    this.ctx.attachment('hello.txt');
    this.ctx.set('Content-Type', 'application/octet-stream');
    this.ctx.body = fs.createReadStream(filePath);
  }

  async downloadImage() {
    const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
    const res = await this.ctx.curl(url, {
      streaming: true,
    });
    this.ctx.type = 'jpg';
    this.ctx.body = res.res;
  }
}

module.exports = DownloadController;
