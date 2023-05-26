module.exports = app => {
  app.router.get('/download', app.controller.download.index);
  app.router.get('/download-css', app.controller.download.downloadCss);
  app.router.get('/download-image', app.controller.download.downloadImage);
};

