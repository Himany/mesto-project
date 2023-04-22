import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, popupSubmitHandler) {
    super(popupSelector);

    this._sumbitHandler = popupSubmitHandler;
    
    this._form = this._popup.querySelector('.popup__form');
    this._buttonSave = this._popup.querySelector('.popup__save');
    this._inputArray = Array.from(this._form.querySelectorAll('.popup__item'));

    this._buttonText = this._buttonSave.textContent;
    this._data = {};
  }
  _submit(evt) {
    evt.preventDefault();
    this._sumbitHandler(evt, this, this._getInputValues());
  }
  _submitWithoutInputs(evt) {
    evt.preventDefault();
    this._sumbitHandler(evt, this, this._data);
  }
  _getInputValues() {
    const data = {};
    this._inputArray.forEach((inputElement) => {
      data[inputElement.id] = inputElement.value;
    });
    return(data);
  }
  updateButton(text) {
    this._buttonSave.textContent = text;
  }
  setEventListeners() {
    super.setEventListeners();
    if (this._inputArray.length === 0) {
      this._form.addEventListener('submit', this._submitWithoutInputs.bind(this));
    } else {
      this._form.addEventListener('submit', this._submit.bind(this));
    }
  }
  close() {
    super.close();
    this._form.reset();
  }
  open() {
    this._buttonSave.textContent = this._buttonText; //Сброс текста кнопки на стандартное !!!Если это делать в блоке finally, тогда не будет отображаться ошибка!!!
    super.open();
  }
  updateData(in_data) {
    this._data = in_data;
  }
  getForm() {
    return(this._form);
  }
}