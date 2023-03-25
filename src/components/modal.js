import { validationOption } from "./constans.js";
import { disableButton } from "./validate.js";

/*
  Function
*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', escKeyDownHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', escKeyDownHandler);
}

function resetPopup(popup) {
  popup.reset();
  disableButton(popup.querySelector(validationOption.submitButtonSelector), validationOption);
}

/*
  Escape handler
*/
function escKeyDownHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

/*
  Click overlay handler
*/
function clickOverlayHandler(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  };
};

export {openPopup, closePopup, resetPopup, clickOverlayHandler};