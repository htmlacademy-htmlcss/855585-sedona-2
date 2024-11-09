const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.modal__container');
const openPopupButton = document.querySelector('.js-button-open');
const closePopupButton = document.querySelector('.modal__close-button');

//  Modal-window

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.style.display = "block";
  popup.classList.add('js-container-open');
});

closePopupButton.addEventListener('click', function () {
  overlay.style.display = "none";
  popup.classList.remove('js-container-open');
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    overlay.style.display = "none";
    popup.classList.remove('js-container-open');
  }
});
