// webpack.production.config.js

const path = require("path")
//
  module.exports = {
    mode: 'production',
    // entry: [
    //   "./source/js/popup-open.js",
    //   "./source/js/popup-close.js"
    // ],
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build/js"), /*Указываю путь для сохранения файла с содержащимся в нем скомпилированным js кодом.*/
      // iife: true
    },
    devtool: false
  };
