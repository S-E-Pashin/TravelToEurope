//Тот же продакшн но остается для короткого указания при необходимости и дальнейшего наполнения.
const path = require("path")

module.exports = {
  mode: "production",
  // entry: [
  //   "./source/js/buy-tour.js",
  //   "./source/js/buy-close.js"
  // ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/js"), /*Указываю путь для сохранения файла с содержащимся в нем скомпилированным js кодом.*/
    iife: true
  },
  devtool: false
};