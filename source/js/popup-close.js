'use strict';
// Закрытие попапа/ов
var buttonsPopupClose = document.querySelectorAll('.popup__close');
var buttonsCloseFirst = buttonsPopupClose;


var addButtonCloseListeners = function () {
  buttonsCloseFirst.forEach(function (value) {
    value.addEventListener('keydown', onClosePopup);
    value.addEventListener('mousedown', onClosePopup);
  });
  document.addEventListener('keydown', onClosePopup);
};

var removeButtonCloseListeners = function () {
  buttonsCloseFirst.forEach(function (value) {
    value.removeEventListener('keydown', onClosePopup);
    value.removeEventListener('mousedown', onClosePopup);
    document.removeEventListener('keydown', onClosePopup);
  });
};

//Действия выполняемые при закрытии попапа/ов
var onClosePopup = function (evt) {
  if (evt.which === 1 || window.utils.ifEscEvent(evt) || evt.which === 88) {
    window.popupHide.getDisabledPopupAll(); /*Скрыл попапы*/
    window.popupOpen.addButtonPricesListeners(); /*Добавил слушатели кнопкам с покупкой*/
    removeButtonCloseListeners(); /*Удалил слушатели закрытия из попапов.*/
  }
}

window.popupClose = {
  addButtonCloseListeners: addButtonCloseListeners
}
