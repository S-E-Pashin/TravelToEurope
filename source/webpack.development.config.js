// const path = require("path")

module.exports = {
  // entry: [
  //   "./source/js/buy-tour.js",
  //   "./source/js/buy-close.js"
  // ],
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  output: {
    filename: 'bundleDev.js',
    // path: path.resolve(__dirname, "build/js"), /*Указываю путь для сохранения файла с содержащимся в нем скомпилированным js кодом.*/
  },
};
