const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.modal-container');
const openPopupButton = document.querySelector('.button-open');
const closePopupButton = document.querySelector('.modal-close-button');

//  Modal-window

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  overlay.style.display = "block";
  popup.classList.add('modal-container-open');
});

closePopupButton.addEventListener('click', function () {
  overlay.style.display = "none";
  popup.classList.remove('modal-container-open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    overlay.style.display = "none";
    popup.classList.remove('modal-container-open');
  }
});
