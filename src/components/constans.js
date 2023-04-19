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

//popup selector
export const popupTypeMestoSelector = '.popup_type_mesto';
export const popupTypeProfileSelector = '.popup_type_profile';
export const popupTypeAddMestoSelector = '.popup_type_add-mesto';
export const popupTypeEditAvatarSelector = '.popup_type_update-avatar';
export const popuptypeDeleteConfirmSelector = '.popup_type_delete-confirm';

//button
export const popupOpenButtonProfile = document.querySelector('.profile__edit-but');
export const popupOpenButtonAddMesto = document.querySelector('.profile__add');
export const popupOpenButtonUpdateAvatar = document.querySelector('.profile__avatar-edit-button');

//profile
export const profileTitle = document.querySelector('.profile__title');
export const profileSubTitle = document.querySelector('.profile__subtitle');

//popup profile inputs
export const inputProfileName = document.querySelector('.popup__item_type_profile-name');
export const inputProfileCapture = document.querySelector('.popup__item_type_profile-capture');

//other
export const cardTemplateSelector = '#element';
