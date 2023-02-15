/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1675045816186_6688';

  // add your middleware config here
  config.middleware = ['slow'];

  config.view = {
    defaultExtension: '.nj',
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.hbs': 'handlebars',
      '.ejs': 'ejs',
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    // 感觉没生效
    // slow: {
    //   threshold: 1,
    //   match: '/news'
    // }
  };


  return {
    ...config,
    ...userConfig,
  };
};
