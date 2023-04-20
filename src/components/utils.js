import { cardTemplateSelector } from "./constans.js";
import Card from './Card.js';

export function addPost(cardObj, api, popup, userInfo, popupDelete) {
  const card = new Card(
    cardObj, 
    cardTemplateSelector, 
    userInfo.getUserId(), 
    popup.open.bind(popup),
    api.addCardLike.bind(api), 
    api.deleteCardLike.bind(api),
    popupDelete.updateData.bind(popupDelete),
    popupDelete.open.bind(popupDelete)
  );
  card.generateCard();
  return(card.getCard());
}

export function deletePost(id) {
  const cardArray = Array.from(document.querySelectorAll('.element'));
  const cardDelete = cardArray.find((element) => {
    return (element.dataset.id === id);
  });
  if (cardDelete) {cardDelete.closest('.element').remove()};
}