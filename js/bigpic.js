const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

