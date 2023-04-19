import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector('.popup__img');
    this._capture = this._popup.querySelector('.popup__capture');
  }
  open(image, capture) {
    this._image.src = image;
    this._image.alt = capture;
    this._capture.textContent = capture;
    super.open();
  }
}