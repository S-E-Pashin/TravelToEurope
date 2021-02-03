'use strict';

var buttonsPopupClose = document.querySelectorAll('.popup__close');
var buttonsCloseFirst = buttonsPopupClose;


var addButtonCloseListeners = function () {
  buttonsCloseFirst.forEach(function (value) {
    value.addEventListener('keydown', onClosePopup);
    value.addEventListener('mousedown', onClosePopup);
  });
};

var onClosePopup = function (evt) {
  if (evt.which === 1 || window.utils.ifEscEvent(evt)) {
    window.popupHide.getDisabledPopup();
  }
}

addButtonCloseListeners();

// Todo Снимать/удалять дубли слушателей
//todo подумать как можно еще разделить и насколько это будет корректно.
