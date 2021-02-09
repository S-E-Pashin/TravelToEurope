'use strict';

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
