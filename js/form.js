import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';
import {
  resetEffects,
  onFormChange,
  onSliderUpdate,
  updateSlider,
  createSlider,
} from './effects.js';
import { showSuccess } from './success-message.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const sliderElement = document.querySelector('.effect-level__slider');

const openUserModal = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('.modal-open');
  form.addEventListener('change', onFormChange);
  createSlider();
  updateSlider();
  initScale();
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  document.addEventListener('keydown', onPopupEscDown);
  uploadCancel.addEventListener('click', closeUserModal);
};

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

//форма отправляется, окно закрывается в случае успешной отправки
const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch('https://27.javascript.pages.academy/kekstagram-simple', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        onSuccess();
        showSuccess();
      }
    });
  });
};

setUserFormSubmit(closeUserModal);
