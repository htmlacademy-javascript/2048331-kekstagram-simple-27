import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';
import {
  resetEffects,
  onFormChange,
  onSliderUpdate,
  updateSlider,
  createSlider,
} from './effects.js';

const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const effectSlider = document.querySelector('.effect-level__slider');

let handleSubmit = null;

const setUserFormSubmit = (onSubmit) => {
  handleSubmit = onSubmit;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  handleSubmit?.(formData);
};

const onUploadFileChange = () => {
  createSlider();
  updateSlider();
  initScale();

  document.body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');

  effectSlider.noUiSlider.on('update', onSliderUpdate);
  form.addEventListener('change', onFormChange);
  document.addEventListener('keydown', onPopupEscKeydown);
  uploadCancel.addEventListener('click', closeUserModal);
};

function closeUserModal() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');

  form.reset();
  resetScale();
  resetEffects();

  document.removeEventListener('keydown', onPopupEscKeydown);
  uploadCancel.removeEventListener('click', onUploadCancelClick);
}

function onUploadCancelClick() {
  closeUserModal();
}

function onPopupEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
}

uploadFile.addEventListener('change', onUploadFileChange);
form.addEventListener('submit', onFormSubmit);

export { closeUserModal, setUserFormSubmit };
