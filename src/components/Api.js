export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._cardsUrl = options.cardsUrl;
    this._cardLikesUrl = options.cardLikesUrl;
    this._profileUrl = options.profileUrl;
    this._avatarUrl = options.avatarUrl;

    this._headers = {
      authorization: options.authorization
    }
    this._headersJson = {
      authorization: options.authorization,
      'Content-Type': 'application/json'
    }
  }

  _serverQuery(inUrl, inMethod = 'GET', data) {
    let options = {
      method: inMethod,
      headers: this._headers
    }
    if (data) {
      options = {
        method: inMethod,
        headers: this._headersJson,
        body: JSON.stringify(data)
      }
    }
    return fetch(this._baseUrl + inUrl, options)
    .then((result) => {
      if (result.ok) {
        return(result.json());
      }
      throw new Error(result.status);
    });
  }

  //cards
  getInitialCards() {
    return this._serverQuery(this._cardsUrl);
  }
  addCard(data) {
    return this._serverQuery(this._cardsUrl, 'POST', data);
  }
  deleteCard(cardId) {
    return this._serverQuery(this._cardsUrl + "/" + cardId, 'DELETE');
  }
  addCardLike(cardId) {
    return this._serverQuery(this._cardLikesUrl + "/" + cardId, 'PUT');
  }
  deleteCardLike(cardId) {
    return this._serverQuery(this._cardLikesUrl + "/" + cardId, 'DELETE');
  }
  
  //user
  getProfileData() {
    return this._serverQuery(this._profileUrl);
  }
  setProfileData(data) {
    return this._serverQuery(this._profileUrl, 'PATCH', data);
  }
  updateAvatar(data) {
    return this._serverQuery(this._avatarUrl, 'PATCH', data);
  }
}