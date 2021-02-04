'use strict';

var buttonsPopupClose = document.querySelectorAll('.popup__close');
var buttonsCloseFirst = buttonsPopupClose;


var addButtonCloseListeners = function () {
  buttonsCloseFirst.forEach(function (value) {
    value.addEventListener('keydown', onClosePopup);
    value.addEventListener('mousedown', onClosePopup);
  });
};

var removeButtonCloseListeners = function () {
  buttonsCloseFirst.forEach(function (value) {
    value.removeEventListener('keydown', onClosePopup);
    value.removeEventListener('mousedown', onClosePopup);
  });
};



//Действия выполняемые при закрытии попапа/ов
var onClosePopup = function (evt) {
  if (evt.which === 1 || window.utils.ifEscEvent(evt)) {
    window.popupHide.getDisabledPopupAll(); /*Скрыл попапы*/
    window.popupOpen.addButtonPricesListeners(); /*Добавил слушатели кнопкам с покупкой*/
    removeButtonCloseListeners(); /*Удалил слушатели закрытия из попапов.*/
  }
}

// Todo Снимать/удалять дубли слушателей
// Слушатели для всех кнопок добавляются когда открывается страница. +
// Слушатели кнопок продажи снимаются когда открывается попап +
// Добавляются слушатели для закрытия попапа +
// Слушатели кнопок продажи добавляются когда закрывается попап
// Снимаются слушатели для закрытия попапа

//todo подумать как можно еще разделить и насколько это будет корректно.

window.popupClose = {
  addButtonCloseListeners: addButtonCloseListeners
}
