import { isEscapeKey } from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');


const openUserModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onPopupEscDown);
  uploadCancel.addEventListener('click', closeUserModal);
};

//Нужно ли сюда добавить body.classlist.remove('.modal-open')
function closeUserModal() {
  form.reset();
  resetScale();
  resetEffects();
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscDown);
  uploadCancel.removeEventListener('click', closeUserModal);
}

function onPopupEscDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

uploadFile.addEventListener('change', openUserModal);
