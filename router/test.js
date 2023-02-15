module.exports = app => {
  app.router.get('/test/list', app.controller.test.list);
};
