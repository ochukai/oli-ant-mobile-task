const fs = require('fs');
const path = require('path');
const pxtorem = require('postcss-pxtorem');

module.exports = function(webpackConfig, env) {

  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);

  webpackConfig.postcss = webpackConfig.postcss();
  webpackConfig.postcss.push(pxtorem({
    rootValue: 100,
    propWhiteList: [],
  }));

  // console.log(webpackConfig.module);
  return webpackConfig;
};
