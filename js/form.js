import {isEscapeKey} from './util.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const userModalOpen = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('.modal-open');
};

const userModalClose = () => {
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscDown);
};

function onPopupEscDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    userModalClose();
  }
}

uploadFile.addEventListener('change', userModalOpen);
uploadCancel.addEventListener('click', userModalClose);
