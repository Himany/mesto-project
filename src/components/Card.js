import { elementPost } from "./constans.js";
import { openMestoPopup, openPopupDeleteCard } from "./index.js";
import { addCardLike, deleteCardLike } from "./api.js";

/*
  Function
*/

function toggleLike(evt, cardId, elementLikeCount) {
  if (evt.target.classList.contains('element__like_active')) {
    deleteCardLike(cardId)
    .then((data) => {
      evt.target.classList.remove('element__like_active');
      elementLikeCount.textContent = data.likes.length;
    })
    .catch((error) => {
      console.log(error);
    });
  } else {
    addCardLike(cardId)
    .then((data) => {
      evt.target.classList.add('element__like_active');
      elementLikeCount.textContent = data.likes.length;
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

function createPost(name, link, like, likeCount, cardId, canDelete) {
  const newElement = elementPost.cloneNode(true);
  const elementImg = newElement.querySelector('.element__img');
  const elementButtonTrash = newElement.querySelector('.element__trash');
  const elementTitle = newElement.querySelector('.element__title');
  const elementButtonLike = newElement.querySelector('.element__like');
  const elementLikeCount = newElement.querySelector('.element__like-count');
  elementImg.addEventListener('click', openMestoPopup);
  if (canDelete) {
    //elementButtonTrash.addEventListener('click', (evt) => {evt.target.closest('.element').remove()});
    elementButtonTrash.addEventListener('click', () => {openPopupDeleteCard(cardId)});
  } else {
    elementButtonTrash.remove();
  }
  elementButtonLike.addEventListener('click', (evt) => {toggleLike(evt, cardId, elementLikeCount)});
  newElement.dataset.id = cardId;
  elementImg.src = link;
  elementImg.alt = name;
  elementTitle.textContent = name;
  elementLikeCount.textContent = likeCount;
  if (like) {elementButtonLike.classList.add('element__like_active')};
  return(newElement);
}

export { createPost };