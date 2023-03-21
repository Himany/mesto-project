import '../pages/index.css';
import { 
  inputProfileName,
  inputProfileCapture,
  profileTitle,
  profileSubTitle,
  popupProfile,
  validationOption,
  popupMestoImg,
  popupMestoCapture,
  popupMesto,
  popupAddMesto,
  inputAddMestoName,
  inputAddMestoLink,
  popupFormAddMesto,
  initialCards,
  popupOpenButtonProfile,
  popupOpenButtonAddMesto,
  popupcloseButtons,
  popupFormProfile,
  popups
} from "./constans.js";
import { enableValidation, toggleButtonState } from './validate.js';
import { addPost } from './utils.js';
import { openPopup, closePopup, resetPopup, clickOverlayHandler } from './modal.js';

/*
  Function
*/
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
  resetPopup(popupFormAddMesto);
}


//Create inital posts
initialCards.forEach((item) => {addPost(item.name, item.link)});

/*
  Listeners
*/

//listen click open
popupOpenButtonProfile.addEventListener('click', openProfilePopup);
popupOpenButtonAddMesto.addEventListener('click', () => {openPopup(popupAddMesto)});

//listen click close
popupcloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//listen submit form
popupFormProfile.addEventListener('submit', handleProfileForm);
popupFormAddMesto.addEventListener('submit', handleAddMestoForm);

/*
  Click overlay handler
*/
Array.from(popups).forEach((popup) => {
  popup.addEventListener('click', clickOverlayHandler);
});

//Starting validation
enableValidation(validationOption); 

export { openMestoPopup };