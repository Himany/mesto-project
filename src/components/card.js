import { elementPost } from "./constans.js";
import { openMestoPopup } from "./modal.js";

/*
  Function
*/

function toggleLike(evt) {
  evt.target.classList.toggle('element__like_active');
}

function createPost(name, link) {
  const newElement = elementPost.cloneNode(true);
  const elementImg = newElement.querySelector('.element__img');
  const elementButtonTrash = newElement.querySelector('.element__trash');
  const elementTitle = newElement.querySelector('.element__title');
  const elementButtonLike = newElement.querySelector('.element__like');
  elementImg.addEventListener('click', openMestoPopup);
  elementButtonTrash.addEventListener('click', (evt) => {evt.target.closest('.element').remove()});
  elementButtonLike.addEventListener('click', toggleLike);
  elementImg.src = link;
  elementImg.alt = name;
  elementTitle.textContent = name;
  return(newElement);
}

export { createPost, toggleLike };