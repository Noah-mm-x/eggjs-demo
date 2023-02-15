module.exports = app => {
  app.router.get('/wb/hot', app.controller.wb.hot);
};
