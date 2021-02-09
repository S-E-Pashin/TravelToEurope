'use strict';

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
