import { 
  inputProfileName, 
  inputProfileCapture, 
  profileTitle, 
  profileSubTitle, 
  validationOption, 
  popupProfile, 
  popupMestoImg, 
  popupMestoCapture, 
  popupMesto, 
  popupFormAddMesto, 
  inputAddMestoName, 
  inputAddMestoLink, 
  popupAddMesto, 
  popupOpenButtonProfile, 
  popupOpenButtonAddMesto,
  popupcloseButtons,
  popupFormProfile,
  popups
} from "./constans.js";

import { addPost } from "./utils.js";
import { toggleButtonState } from "./validate.js";

/*
  Function
*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', EscKeyDownHandler);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
  inputProfileName.value = profileTitle.textContent;
  inputProfileCapture.value = profileSubTitle.textContent;

  //Отдельная проверка из-за заполнения инпутов
  const inputList = Array.from(popupProfile.querySelectorAll(validationOption.inputSelector));
  const buttonElement = popupProfile.querySelector(validationOption.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validationOption);

  openPopup(popupProfile);
}

function openMestoPopup(evt) {
  popupMestoImg.src = evt.target.src;
  popupMestoImg.alt = evt.target.alt;
  popupMestoCapture.textContent = evt.target.alt;
  openPopup(popupMesto);
}

function handleProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileName.value;
  profileSubTitle.textContent = inputProfileCapture.value;
  closePopup(popupProfile);
}

function handleAddMestoForm(evt) {
  evt.preventDefault();
  closePopup(popupAddMesto);
  addPost(inputAddMestoName.value, inputAddMestoLink.value);
  popupFormAddMesto.reset();
}

/*
  Escape handler
*/
function EscKeyDownHandler(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
    document.removeEventListener('keydown', EscKeyDownHandler);
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

export {openPopup, closePopup, openMestoPopup, openProfilePopup, handleProfileForm, handleAddMestoForm, clickOverlayHandler};