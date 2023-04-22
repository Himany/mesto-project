export default class UserInfo {
  constructor(data, getServerUserInfo, setServerUserInfo, setServerUserAvatar) {
    this._nameSelector = data.nameSelector;
    this._aboutSelector = data.aboutSelector;
    this._avatarSelector = data.avatarSelector;

    this._nameElement = document.querySelector(this._nameSelector);
    this._aboutElement = document.querySelector(this._aboutSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);

    this._getServerUserInfo = getServerUserInfo;
    this._setServerUserInfo = setServerUserInfo;
    this._setServerUserAvatar = setServerUserAvatar;
  }

  _updateName(data) {
    this._nameElement.textContent = data;
  }
  _updateAbout(data) {
    this._aboutElement.textContent = data;
  }
  _updateAvatar(data) {
    this._avatarElement.src = data;
  }

  //set
  setAllUserInfoLocal(data) {
    this._about = data.about;
    this._avatar = data.avatar;
    this._cohort = data.cohort;
    this._name = data.name;
    this._id = data._id;

    this._updateName(data.name);
    this._updateAbout(data.about);
    this._updateAvatar(data.avatar);
  }
  setUserUnfo(data) {
    return(
      this._setServerUserInfo(data)
        .then((data) => {
          this._name = data.name;
          this._about = data.about;
          this._updateName(data.name);
          this._updateAbout(data.about);
        })
      );
  }
  setUserAvatar(data) {
    return(
      this._setServerUserAvatar(data)
        .then((data) => {
          this._avatar = data.avatar;
          this._updateAvatar(data.avatar);
        })
      );
  }

  //get
  getUserInfo() {
    return(this._getServerUserInfo());
  }
  getUserId() {
    return(this._id);
  }
}