'use strict';

var buttonPrices = document.querySelectorAll('.prices__button');
var buttonsActiveFirst = buttonPrices; /*Условное обозначение кнопки для унификации*/
var buttonPressedClassFirst = 'prices__button'; /*Класс для фильтрации по нажимаемой кнопке.*/
var popupShowFirst = document.querySelector('.popup__buy'); /*Первый попап для первой кнопки*/


//Функция для добавления слушателей на кнопки "Купить сейчас".
var addButtonPricesListeners = function () {
  buttonsActiveFirst.forEach(function (value) {
    value.addEventListener('keydown', onOpenBuyTourPopup);
    value.addEventListener('mousedown', onOpenBuyTourPopup);
  });
};

//Действия при нажатии на кнопку:
//Когда слушатель срабатывает то у попапа с нужной информацие появляется класс для видимости/или убирается класс для невидимости
//У кнопки при появлении попапа должен данный слушатель удалиться для невозможности создания дубликатов

//  1. функция добавления попапа.
var getVisiblePopup = function(evt) {
  if (evt.currentTarget.classList.contains(buttonPressedClassFirst)) {
    popupShowFirst.classList.remove('visually_hidden');
  }
}

var onOpenBuyTourPopup = function (evt) { /* Функция запускающая функцию при нажатии ЛКМ или Enter */
  if (evt.which === 1 || evt.key === 'Enter') {
    getVisiblePopup(evt);
  }
}

addButtonPricesListeners();

// Слушатель снова присваивается кнопке:
//По факту отправки формы
// или же по факту закрытия данного попапа(для осуществления покупки)
