import '../pages/index.css';

import Api from '../components/Api.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

import { addPost, deletePost } from '../components/utils.js';
import {
  validationOption,
  popupTypeMestoSelector,
  popupTypeProfileSelector,
  popupTypeAddMestoSelector,
  popupTypeEditAvatarSelector,
  popuptypeDeleteConfirmSelector,
  popupOpenButtonProfile,
  popupOpenButtonAddMesto,
  popupOpenButtonUpdateAvatar,
  profileTitle,
  profileSubTitle,
  inputProfileName,
  inputProfileCapture
 } from '../components/constans.js';

////////////////////////////////////////////////////////////////////////////////////
//submit function///////////////////////////////////////////////////////////////////
function handleProfileForm(evt, popup, data) {
  popup.updateButton('Сохранение...');
  userInfo.setUserUnfo(data)
    .then((data) => {
      popup.close();
    })
    .catch((error) => {
      popup.updateButton(`Попробовать снова (${error})`);
    });
}

function handleAddMestoForm(evt, popup, data) {
  popup.updateButton('Сохранение...');
  api.addCard(data)
    .then((data) => {
      //Добавить карточку на страницу функцией addPost
      popup.close();
    })
    .catch((error) => {
      popup.updateButton(`Попробовать снова (${error})`);
    });
}

function handleCardDeleteForm(evt, popup, data) {
  popup.updateButton('Удаление...');
  api.deleteCard(data.id)
    .then(() => {
      deletePost(data.id);
      popup.close();
    })
    .catch((error) => {
      popup.updateButton(`Попробовать снова (${error})`);
    });
}

function handleUpdateAvatarForm(evt, popup, data) {
  popup.updateButton('Сохранение...');
  userInfo.setUserAvatar(data)
    .then((data) => {
      popup.close();
    })
    .catch((error) => {
      popup.updateButton(`Попробовать снова (${error})`);
    });
}
////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
//Popups////////////////////////////////////////////////////////////////////////////
const popupViewImage = new PopupWithImage(popupTypeMestoSelector);
popupViewImage.setEventListeners();
const popupProfile = new PopupWithForm(popupTypeProfileSelector, handleProfileForm);
popupProfile.setEventListeners();
const popupAddMesto = new PopupWithForm(popupTypeAddMestoSelector, handleAddMestoForm);
popupAddMesto.setEventListeners();
const popupEditAvatar = new PopupWithForm(popupTypeEditAvatarSelector, handleUpdateAvatarForm);
popupEditAvatar.setEventListeners();
const popupDeletePost = new PopupWithForm(popuptypeDeleteConfirmSelector, handleCardDeleteForm);
popupDeletePost.setEventListeners();
////////////////////////////////////////////////////////////////////////////////////

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  cardsUrl: '/cards',
  cardLikesUrl: '/cards/likes',
  profileUrl: '/users/me',
  avatarUrl: '/users/me/avatar',
  authorization: '9c3089de-d2f6-4f94-8f18-89f9e74580b3'
}); 

const userInfo = new UserInfo(
  {
    nameSelector: '.profile__title',
    aboutSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar'
  },
  api.getProfileData.bind(api), 
  api.setProfileData.bind(api), 
  api.updateAvatar.bind(api)
);

//Loading profile data & Create inital posts
Promise.all([userInfo.getUserInfo(), api.getInitialCards()])
  .then((data) => {
    userInfo.setAllUserInfoLocal(data[0]);
    //Добавить карточки на страницу
  })
  .catch((error) => {
    console.log('Ошибка: ' + error);
  }); 


//listener click open popup
popupOpenButtonProfile.addEventListener('click', () => {
  inputProfileName.value = profileTitle.textContent;
  inputProfileCapture.value = profileSubTitle.textContent;
  popupProfile.open();
});
popupOpenButtonAddMesto.addEventListener('click', () => {
  popupAddMesto.open();
});
popupOpenButtonUpdateAvatar.addEventListener('click', () => {
  popupEditAvatar.open();
});