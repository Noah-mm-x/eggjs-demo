module.exports = app => {
  app.router.get('/users/list', app.controller.users.list);
  app.router.get('/users/detail', app.controller.users.detail);
};
