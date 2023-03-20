import '../pages/index.css';
import { 
  initialCards, 
  validationOption,
  popupOpenButtonProfile,
  popupOpenButtonAddMesto,
  popupcloseButtons,
  popupFormProfile,
  popupFormAddMesto,
  popups,
  popupAddMesto
} from "./constans.js";
import { enableValidation } from './validate.js';
import { addPost } from './utils.js';
import { openPopup, closePopup, openProfilePopup, handleProfileForm, handleAddMestoForm, clickOverlayHandler } from './modal.js';

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