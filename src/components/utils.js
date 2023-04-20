/*
  Function
*/

import { 
  elementsContainer,
  profileAvatar,
  profileTitle,
  profileSubTitle
 } from "./constans.js";
import { createPost } from "./card.js";

export function addPost(name, link, like, likeCount, cardId, canDelete) {
  elementsContainer.prepend(createPost(name, link, like, likeCount, cardId, canDelete));
}

export function deletePost(id) {
  const cardArray = Array.from(document.querySelectorAll('.element'));
  const cardDelete = cardArray.find((element) => {
    return (element.dataset.id === id);
  })
  if (cardDelete) {cardDelete.closest('.element').remove()};
}

export function editAvatarProfile(data) {
  profileAvatar.src = data;
}

export function editNameProfile(data) {
  profileTitle.textContent = data;
}

export function editCaptureProfile(data) {
  profileSubTitle.textContent = data;
}