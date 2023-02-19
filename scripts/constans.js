//popup window
const popupProfile = document.querySelector('.popup_type_profile');
const popupAddMesto = document.querySelector('.popup_type_add-mesto');
const popupMesto = document.querySelector('.popup_type_mesto');

//popup inputs
const inputProfileName = document.querySelector('.popup__item_type_profile-name');
const inputProfileCapture = document.querySelector('.popup__item_type_profile-capture');
const inputAddMestoName = document.querySelector('.popup__item_type_addmesto-name');
const inputAddMestoLink = document.querySelector('.popup__item_type_addmesto-link');

//popup form
const popupFormProfile = document.querySelector('.popup__form_type_profile');
const popupFormAddMesto = document.querySelector('.popup__form_type_add-mesto');

//popup close
const popupCloseButtonProfile = document.querySelector('.popup__close_type_profile');
const popupCloseButtonAddMesto = document.querySelector('.popup__close_type_add-mesto');
const popupCloseButtonMesto = document.querySelector('.popup__close_type_mesto');

//button
const popupOpenButtonProfile = document.querySelector('.profile__edit-but');
const popupOpenButtonAddMesto = document.querySelector('.profile__add');

//Mesto
const popupMestoImg = document.querySelector('.popup__img');
const popupMestoCapture = document.querySelector('.popup__capture');

//profile
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__subtitle');

//template
const templatePost = document.querySelector('#element').content;
const elementPost = templatePost.querySelector('.element');

//other element
const elementsContainer = document.querySelector('.elements');

//cards init array
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];