'use strict';
//Скрытие попапов.

//Скрытие всех попапов.
var getDisabledPopupAll = function () { /*  Функция поочередно добавляющая класс visually_hidden в том случае если он отсутствует у данного элемента.   */
  var popupWindows = document.querySelectorAll('.popup__window-js');
  popupWindows.forEach(function (value) {
    if (value.classList.contains('visually_hidden') !== true) {
      value.classList.add('visually_hidden');
    }
  });
};

window.popupHide = {
  getDisabledPopupAll: getDisabledPopupAll
};
