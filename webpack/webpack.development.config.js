const path = require("path"); /*Для использования расширения path/пути к местоположнию данного файла*/

module.exports = {
  mode: "development",
  // entry: [
  //   "./source/js/popup-open.js", /*Указано в файле gulpfile.ls*/
  //   "./source/js/popup-close.js"
  // ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/js"), /*Указываю путь для сохранения файла с содержащимся в нем скомпилированным js кодом.*/
    iife: true /*Обертывание для автозапуска кода*/
  },
  devtool: false
};
