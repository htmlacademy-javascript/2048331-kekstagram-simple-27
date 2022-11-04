import {bigPicture} from './smallpic.js';

const closeButton = bigPicture.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

