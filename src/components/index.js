import '../pages/index.css';
import { 
  inputProfileName,
  inputProfileCapture,
  popupProfile,
  validationOption,
  popupMestoImg,
  popupMestoCapture,
  popupMesto,
  popupAddMesto,
  inputAddMestoName,
  inputAddMestoLink,
  popupFormAddMesto,
  popupOpenButtonProfile,
  popupOpenButtonAddMesto,
  popupcloseButtons,
  popupFormProfile,
  popups,
  popupButtonEditProfile,
  popupButtonAddMesto,
  profileTitle,
  profileSubTitle,
  popupFormDeleteCard,
  popupDeleteCard,
  popupButtonDeleteCard,
  popupUpdateAvatar,
  inputUpdateAvatarLink,
  popupFormUpdateAvatar,
  popupOpenButtonUpdateAvatar,
  popupButtonUpdateAvatar
} from "./constans.js";
import { enableValidation, toggleButtonState } from './validate.js';
import { addPost,editAvatarProfile,editNameProfile,editCaptureProfile, deletePost } from './utils.js';
import { openPopup, closePopup, resetPopup, clickOverlayHandler } from './modal.js';
import { getInitialCards, getProfileData, setProfileData, addCard, deleteCard, updateAvatar } from './api.js';

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

  popupButtonEditProfile.textContent = 'Сохранить'; //Сбрасываем текст кнопки !!!(Если текст сбрасывать в блоке finally, пользователь не увидит ошибку в тексте кнопки)!!!
  openPopup(popupProfile);
}

function openAddMestoPopup() {
  popupButtonAddMesto.textContent = 'Сохранить'; //Сбрасываем текст кнопки !!!(Если текст сбрасывать в блоке finally, пользователь не увидит ошибку в тексте кнопки)!!!
  openPopup(popupAddMesto);
}

export function openPopupDeleteCard(cardId) {
  popupFormDeleteCard.dataset.id = cardId;
  popupButtonDeleteCard.textContent = 'Да'; //Сбрасываем текст кнопки !!!(Если текст сбрасывать в блоке finally, пользователь не увидит ошибку в тексте кнопки)!!!
  openPopup(popupDeleteCard);
}

export function openMestoPopup(evt) {
  popupMestoImg.src = evt.target.src;
  popupMestoImg.alt = evt.target.alt;
  popupMestoCapture.textContent = evt.target.alt;
  openPopup(popupMesto);
}

function openUpdateAvatar() {
  popupButtonUpdateAvatar.textContent = 'Сохранить'; //Сбрасываем текст кнопки !!!(Если текст сбрасывать в блоке finally, пользователь не увидит ошибку в тексте кнопки)!!!
  openPopup(popupUpdateAvatar);
}

function handleProfileForm(evt) {
  evt.preventDefault();
  popupButtonEditProfile.textContent = 'Сохранение...';
  const data = {
    name: inputProfileName.value,
    about: inputProfileCapture.value
  };
  setProfileData(data)
    .then((data) => {
      editNameProfile(data.name);
      editCaptureProfile(data.about);
      closePopup(popupProfile);
    })
    .catch((error) => {
      popupButtonEditProfile.textContent = `Попробовать снова (${error})`;
    });
}

function handleAddMestoForm(evt) {
  evt.preventDefault();
  popupButtonAddMesto.textContent = 'Сохранение...';
  const data = {
    name: inputAddMestoName.value,
    link: inputAddMestoLink.value
  };
  addCard(data)
    .then((data) => {
      addPost(data.name, data.link, false, data.likes.length, data._id, true);
      closePopup(popupAddMesto);
      resetPopup(popupFormAddMesto);
      popupButtonAddMesto.textContent = 'Сохранить';
    })
    .catch((error) => {
      popupButtonAddMesto.textContent = `Попробовать снова (${error})`;
    });
}

function handleCardDeleteForm(evt) {
  evt.preventDefault();

  popupButtonDeleteCard.textContent = 'Удаление...';
  deleteCard(evt.target.dataset.id)
    .then((data) => {
      deletePost(evt.target.dataset.id);
      closePopup(popupDeleteCard);
      popupButtonDeleteCard.textContent = 'Да';
    })
    .catch((error) => {
      popupButtonAddMesto.textContent = `Попробовать снова (${error})`;
    });
}

function handleUpdateAvatarForm(evt) {
  evt.preventDefault();

  const data = {
    avatar: inputUpdateAvatarLink.value
  };
  popupButtonUpdateAvatar.textContent = 'Сохранение...';
  updateAvatar(data)
    .then((data) => {
      editAvatarProfile(data.avatar);
      closePopup(popupUpdateAvatar);
      popupButtonUpdateAvatar.textContent = 'Сохранить';
    })
    .catch((error) => {
      popupButtonUpdateAvatar.textContent = `Попробовать снова (${error})`;
    });
}

//Loading profile data & Create inital posts
Promise.all([getProfileData(), getInitialCards()])
  .then((data) => {
    //profile
    editAvatarProfile(data[0].avatar);
    editNameProfile(data[0].name);
    editCaptureProfile(data[0].about);

    //cards
    data[1].reverse().forEach((cardObj) => {
      const myLike = cardObj.likes.some((likeObj) => {
        return (likeObj._id === data[0]._id);
      });
      const canDelete = cardObj.owner._id === data[0]._id;
      addPost(cardObj.name, cardObj.link, myLike, cardObj.likes.length, cardObj._id, canDelete);
    })
  })
  .catch((error) => {
    console.log('Ошибка: ' + error);
  }); 


/*
  Listeners
*/

//listen click open
popupOpenButtonProfile.addEventListener('click', openProfilePopup);
popupOpenButtonAddMesto.addEventListener('click', openAddMestoPopup);
popupOpenButtonUpdateAvatar.addEventListener('click', openUpdateAvatar);

//listen click close
popupcloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//listen submit form
popupFormProfile.addEventListener('submit', handleProfileForm);
popupFormAddMesto.addEventListener('submit', handleAddMestoForm);
popupFormDeleteCard.addEventListener('submit', handleCardDeleteForm);
popupFormUpdateAvatar.addEventListener('submit', handleUpdateAvatarForm);

/*
  Click overlay handler
*/
Array.from(popups).forEach((popup) => {
  popup.addEventListener('click', clickOverlayHandler);
});

//Starting validation
enableValidation(validationOption); 