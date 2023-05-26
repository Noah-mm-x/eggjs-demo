'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  require('./../router/news')(app);
  require('./../router/users')(app);
  require('./../router/test')(app);
  require('./../router/moyu')(app);
  require('./../router/wb')(app);
  require('./../router/download')(app);
};

