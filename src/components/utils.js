/*
  Function
*/

import { elementsContainer } from "./constans.js";
import { createPost } from "./card.js";

function addPost(name, link) {
  elementsContainer.prepend(createPost(name, link));
}

export {addPost};