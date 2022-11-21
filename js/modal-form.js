import { isEscapeKey } from './util.js';
import { resetScale, initScale } from './scale.js';

import { setEffectChange, setCurrentEffect, getCurrentEffect } from './modal-form-effects.js';
import {
  setSliderUpdate,
  createSlider,
  destroySlider,
  resetSlider,
  updateSlider,
  hideSlider,
  showSlider,
} from './modal-form-slider.js';
import { getSliderOptions } from './slider-options.js';

const DEFAULT_EFFECT = 'none';
const DEFAULT_EFFECTS = ['', DEFAULT_EFFECT];

const form = document.querySelector('#upload-select-image');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const uploadCancel = form.querySelector('#upload-cancel');
const submitButton = form.querySelector('#upload-submit');
const image = form.querySelector('.img-upload__preview img');

let handleSubmit = null;

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

const setUserFormSubmit = (onSubmit) => {
  handleSubmit = onSubmit;
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  handleSubmit?.(formData);
};

const onUploadFileChange = () => {
  const sliderOptions = getSliderOptions(DEFAULT_EFFECT);

  createSlider(sliderOptions);
  setCurrentEffect(DEFAULT_EFFECT);
  hideSlider();
  initScale();

  document.body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
  uploadCancel.addEventListener('click', closeUserModal);
};

function closeUserModal() {
  document.body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');

  form.reset();
  resetScale();
  setCurrentEffect(DEFAULT_EFFECT);
  destroySlider();

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

const getCurrentFilter = (value) => {
  const effect = getCurrentEffect();
  if (DEFAULT_EFFECTS.includes(effect)) {
    return '';
  }

  const { style, unit } = getSliderOptions(effect);

  return `${style}(${value}${unit})`;
};

setEffectChange((previousEffect, currentEffect) => {
  image.classList.remove(`effects__preview--${previousEffect}`);
  image.classList.add(`effects__preview--${currentEffect}`);

  if (currentEffect === DEFAULT_EFFECT) {
    hideSlider();
    resetSlider();
  } else {
    const options = getSliderOptions(currentEffect);

    updateSlider(options);
    showSlider();
  }
});

setSliderUpdate((volume) => {
  image.style.filter = getCurrentFilter(volume);
});

uploadFile.addEventListener('change', onUploadFileChange);
form.addEventListener('submit', onFormSubmit);

export { closeUserModal, setUserFormSubmit, blockSubmitButton, unblockSubmitButton };
