import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';
import {
  resetEffects,
  onFormChange,
  onSliderUpdate,
  updateSlider,
  createSlider,
} from './effects.js';
import { sendData } from './api.js';
import { showSuccess } from './success-modal.js';
import { showError } from './error-modal.js';

const window = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const sliderElement = document.querySelector('.effect-level__slider');

const onUserModalClick = () => {
  imgUploadOverlay.classList.remove('hidden');
  window.classList.add('modal-open');
  form.addEventListener('change', onFormChange);
  createSlider();
  updateSlider();
  initScale();
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadCancel.addEventListener('click', closeUserModal);
};

function closeUserModal() {
  form.reset();
  resetScale();
  resetEffects();
  window.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadCancel.removeEventListener('click', closeUserModal);
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

uploadFile.addEventListener('change', onUserModalClick);

//форма отправляется, окно закрывается в случае успешной отправки
const setUserFormSubmit = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const body = new FormData(evt.target);
    const onSuccess = () => {
      showSuccess();
      closeUserModal();
    };
    const onFail = () => {
      showError();
    };
    sendData(body, onSuccess, onFail);
  });
};

setUserFormSubmit();

export { closeUserModal };
