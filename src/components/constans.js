//popup window
export const popups = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupAddMesto = document.querySelector('.popup_type_add-mesto');
export const popupMesto = document.querySelector('.popup_type_mesto');
export const popupDeleteCard = document.querySelector('.popup_type_delete-confirm');
export const popupUpdateAvatar = document.querySelector('.popup_type_update-avatar');

//popup inputs
export const inputProfileName = document.querySelector('.popup__item_type_profile-name');
export const inputProfileCapture = document.querySelector('.popup__item_type_profile-capture');
export const inputAddMestoName = document.querySelector('.popup__item_type_addmesto-name');
export const inputAddMestoLink = document.querySelector('.popup__item_type_addmesto-link');
export const inputUpdateAvatarLink = document.querySelector('.popup__item_type_update-avatar');

//popup form
export const popupFormProfile = document.querySelector('.popup__form_type_profile');
export const popupFormAddMesto = document.querySelector('.popup__form_type_add-mesto');
export const popupFormDeleteCard = document.querySelector('.popup__form_type_delete-confirm');
export const popupFormUpdateAvatar = document.querySelector('.popup__form_type_update-avatar');

//button
export const popupOpenButtonProfile = document.querySelector('.profile__edit-but');
export const popupOpenButtonAddMesto = document.querySelector('.profile__add');
export const popupOpenButtonUpdateAvatar = document.querySelector('.profile__avatar-edit-button');

//Mesto
export const popupMestoImg = document.querySelector('.popup__img');
export const popupMestoCapture = document.querySelector('.popup__capture');

//profile
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileTitle = document.querySelector('.profile__title');
export const profileSubTitle = document.querySelector('.profile__subtitle');

//template
export const templatePost = document.querySelector('#element').content;
export const elementPost = templatePost.querySelector('.element');

//popup sumbit button
export const popupButtonEditProfile = document.querySelector('.popup__save_type_profile');
export const popupButtonAddMesto = document.querySelector('.popup__save_type_add-mesto');
export const popupButtonDeleteCard = document.querySelector('.popup__save_type_delete-confirm');
export const popupButtonUpdateAvatar = document.querySelector('.popup__save_type_update-avatar');

//popup close buttons
export const popupcloseButtons = document.querySelectorAll('.popup__close');

//other element
export const elementsContainer = document.querySelector('.elements');

export const validationOption = {
  formSelector: '.popup__form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputContainer: '.popup__item-container',
  inputErrorClass: 'popup__item_error',
  errorClass: '.popup__item-error',
  errorClassActive: 'popup__item-error_active'
}; 