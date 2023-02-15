module.exports = app => {
  app.router.get('/moyu/logs', app.controller.moyu.logs);
};
