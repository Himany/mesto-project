export default class Card {
  constructor(data, cardTemplateSelector, userId, openCard, serverLikeAdd, serverLikeDelete, updateDeleteData, openDelete) {
    this._createdAt = data.createdAt;
    this._likes = data.likes;
    this._link = data.link;
    this._name = data.name;
    this._owner = data.owner;
    this._id = data._id;

    this._cardTemplateSelector = cardTemplateSelector;

    this._userId = userId;

    this._openCard = openCard;
    this._serverLikeAdd = serverLikeAdd;
    this._serverLikeDelete = serverLikeDelete;
    this._updateDeleteData = updateDeleteData;
    this._openDelete = openDelete;
  }

  //handlers
  _deleteHandler() {
    this._updateDeleteData({id: this._id});
    this._openDelete();
  }
  _likeHandler() {
    if (this._like) {
      this._serverLikeDelete(this._id)
      .then((data) => {
        this._like = !this._like;
        this._likes = data.likes;
        this._updateLike();
      })
      .catch((error) => {
        console.log(error);
      });
    } else {
      this._serverLikeAdd(this._id)
      .then((data) => {
        this._like = !this._like;
        this._likes = data.likes;
        this._updateLike();
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
  _openHandler() {
    this._openCard(this._link, this._name);
  }

  //private
  _canDelete() {
    return(this._owner._id === this._userId);
  }
  _likeStatus() {
    const result = this._likes.some((likeObj) => {
      return (likeObj._id === this._userId);
    });
    return(result);
  }
  _updateLike() {
    if (this._like) {
      this._elementButtonLike.classList.add('element__like_active');
    } else {
      this._elementButtonLike.classList.remove('element__like_active');
    }
    this._elementLikeCount.textContent = this._likes.length;
  }
  _setData() {
    this._element.dataset.id = this._id;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._elementTitle.textContent = this._name;
    this._updateLike();
  }
  _setEventListeners() {
    this._elementImg.addEventListener('click', this._openHandler.bind(this));
    if (this._canDelete()) {this._elementButtonTrash.addEventListener('click', this._deleteHandler.bind(this))};
    this._elementButtonLike.addEventListener('click', this._likeHandler.bind(this));
  }
  generateCard() {
    this._element = document.querySelector(this._cardTemplateSelector).content.querySelector('.element').cloneNode(true);
    this._elementImg = this._element.querySelector('.element__img');
    this._elementButtonTrash = this._element.querySelector('.element__trash');
    this._elementTitle = this._element.querySelector('.element__title');
    this._elementButtonLike = this._element.querySelector('.element__like');
    this._elementLikeCount = this._element.querySelector('.element__like-count');

    if (!this._canDelete()) {this._elementButtonTrash.remove()};

    this._like = this._likeStatus();
    this._setData();
    this._setEventListeners();
  }

  //public
  getCard() {
    return(this._element);
  }
}