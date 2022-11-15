import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';
import {
  resetEffects,
  onFormChange,
  onSliderUpdate,
  updateSlider,
  createSlider,
} from './effects.js';

const body = document.querySelector('body');
const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const sliderElement = document.querySelector('.effect-level__slider');

const onUploadFileChange = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
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
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');
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

let handleSubmit = null;

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  handleSubmit?.(formData); // ?. = handleSubmit !== undefined || handleSubmit !== null
};

uploadFile.addEventListener('change', onUploadFileChange);
form.addEventListener('submit', onFormSubmit);

const setUserFormSubmit = (onSubmit) => {
  handleSubmit = onSubmit;
};

export { closeUserModal, setUserFormSubmit };
