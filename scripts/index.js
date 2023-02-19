//function
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openProfilePopup() {
  inputProfileName.value = profileTitle.textContent;
  inputProfileCapture.value = profileSubTitle.textContent;
  openPopup(popupProfile);
}

function openMestoPopup(evt) {
  popupMestoImg.src = evt.target.src;
  popupMestoImg.alt = evt.target.alt;
  popupMestoCapture.textContent = evt.target.alt;
  openPopup(popupMesto);
}

function handleProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputProfileName.value;
  profileSubTitle.textContent = inputProfileCapture.value;
  closePopup(popupProfile);
}

function handleAddMestoForm(evt) {
  evt.preventDefault();
  closePopup(popupAddMesto);
  addPost(inputAddMestoName.value, inputAddMestoLink.value);
  popupFormAddMesto.reset();
}

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

function addPost(name, link) {
  elementsContainer.prepend(createPost(name, link));
}

//create init posts
initialCards.forEach((item) => {addPost(item.name, item.link)});

//listen click open
popupOpenButtonProfile.addEventListener('click', openProfilePopup);
popupOpenButtonAddMesto.addEventListener('click', () => {openPopup(popupAddMesto)});

//listen click close
popupcloseButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//listen submit form
popupFormProfile.addEventListener('submit', handleProfileForm);
popupFormAddMesto.addEventListener('submit', handleAddMestoForm);