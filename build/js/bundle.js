/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
!function() {
/*!***************************!*\
  !*** ./source/js/form.js ***!
  \***************************/


var form = document.querySelector('.form__message');
// var buttonSubmitClass = 'form__button-submit'; /*Класс для фильтрации по нажимаемой кнопке.*/
// var popupSuccesSubmit = document.querySelector('.popup__confirmation');
// console.log(form);











// getSubmitListener();

window.form = {
  formField :form
}


























}();
!function() {
/*!**********************************!*\
  !*** ./source/js/popup-close.js ***!
  \**********************************/

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

}();
!function() {
/*!****************************************!*\
  !*** ./source/js/popup-form-submit.js ***!
  \****************************************/


var popupSubmit = document.querySelector('.popup__confirmation');

var onSubmitButtonPress = function (evt) {
  try {
    getSubmitPopup();
    window.popupClose.addButtonCloseListeners();
    evt.preventDefault(); /* отменил действие формы по умолчанию */
  } catch (error) {
    evt.preventDefault(); /* отменил действие формы по умолчанию */
    // window.sendMessage.getErrorPopup(error); /*Заготовка функции для возникающей ошибки отправки.*/
  }
};

var getSubmitPopup = function (evt) {
  popupSubmit.classList.remove('visually_hidden');
}

var getVisiblePopupSubmit = function () {

}
















var getSubmitListener = function () {
  window.form.formField.addEventListener('submit', onSubmitButtonPress);
};

var removeSubmitListener = function () {
  window.form.formField.removeEventListener('submit', onSubmitButtonPress);
};

getSubmitListener();

window.popupFormSubmit = {

}

}();
!function() {
/*!*********************************!*\
  !*** ./source/js/popup-hide.js ***!
  \*********************************/

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

}();
!function() {
/*!*********************************!*\
  !*** ./source/js/popup-open.js ***!
  \*********************************/


var buttonPrices = document.querySelectorAll('.prices__button');

var buttonsActiveFirst = buttonPrices; /*Условное обозначение кнопки для унификации*/
var buttonPressedClassFirst = 'prices__button'; /*Класс для фильтрации по нажимаемой кнопке.*/

var popupShowFirst = document.querySelector('.popup__buy'); /*Первый попап для первой кнопки*/

// var buttonsActiveSecond = window.form.formField;
// var buttonPressedClassSecond = window.form.buttonSubmitClass; /*Класс для фильтрации по нажимаемой кнопке.*/
// var popupShowSecond = window.form.popupSuccesSubmit; /* 2 попап для 2 кнопки*/




//Функция добавления слушателей на кнопки "Купить сейчас".
var addButtonPricesListeners = function () {
  buttonsActiveFirst.forEach(function (value) {
    value.addEventListener('keydown', onOpenBuyTourPopup);
    value.addEventListener('mousedown', onOpenBuyTourPopup);
  });
};

//Функция добавления попапа.
var getVisiblePopup = function(evt) {
  if (evt.currentTarget.classList.contains(buttonPressedClassFirst)) {
    popupShowFirst.classList.remove('visually_hidden');
  }
}

// Действия при нажатии на кнопку
var onOpenBuyTourPopup = function (evt) { /* Функция запускающая функцию при нажатии ЛКМ или Enter */
  if (evt.which === 1 || evt.key === 'Enter') {
    getVisiblePopup(evt);
    removeButtonPricesListeners();
    window.popupClose.addButtonCloseListeners();
  }
}

//Снятие слушателей с кнопки
var  removeButtonPricesListeners = function () {
  buttonsActiveFirst.forEach(function (value) {
    value.removeEventListener('keydown', onOpenBuyTourPopup);
    value.removeEventListener('mousedown', onOpenBuyTourPopup);
  });
}

addButtonPricesListeners(); /*Слушатели для всех кнопок добавляются когда открывается страница.*/

window.popupOpen = {
  // addButtonPricesListeners :addButtonPricesListeners
}

}();
!function() {
/*!****************************!*\
  !*** ./source/js/utils.js ***!
  \****************************/


var ifEscEvent = function (evt) {
  return evt.key === 'Escape';
};

window.utils = {
  ifEscEvent: ifEscEvent
};

}();
/******/ })()
;