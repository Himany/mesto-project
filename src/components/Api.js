const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-22',
  getCardsUrl: '/cards',
  getCardLikesUrl: '/cards/likes',
  getProfileUrl: '/users/me',
  getAvatarUrl: '/users/me/avatar',
  headers: {
    authorization: '9c3089de-d2f6-4f94-8f18-89f9e74580b3'
  },
  headersJson: {
    authorization: '9c3089de-d2f6-4f94-8f18-89f9e74580b3',
    'Content-Type': 'application/json'
  }
}

function serverQuery(inUrl, inMethod = 'GET', data) {
  let options = {
    method: inMethod,
    headers: config.headers
  }
  if (data) {
    options = {
      method: inMethod,
      headers: config.headersJson,
      body: JSON.stringify(data)
    }
  }
  return fetch(config.baseUrl + inUrl, options)
  .then((result) => {
    if (result.ok) {
      return(result.json());
    }
    throw new Error(result.status);
  });
}

export function getInitialCards() {
  return serverQuery(config.getCardsUrl);
}

export function getProfileData() {
  return serverQuery(config.getProfileUrl);
}

export function setProfileData(data) {
  return serverQuery(config.getProfileUrl, 'PATCH', data);
}

export function addCard(data) {
  return serverQuery(config.getCardsUrl, 'POST', data);
}

export function deleteCard(cardId) {
  return serverQuery(config.getCardsUrl + "/" + cardId, 'DELETE');
}

export function addCardLike(cardId) {
  return serverQuery(config.getCardLikesUrl + "/" + cardId, 'PUT');
}

export function deleteCardLike(cardId) {
  return serverQuery(config.getCardLikesUrl + "/" + cardId, 'DELETE');
}

export function updateAvatar(data) {
  return serverQuery(config.getAvatarUrl, 'PATCH', data);
}