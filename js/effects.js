import { getSliderOptions } from './slider-options.js';

const DEFAULT_EFFECT = 'none';

const image = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let chosenEffect;

const isDefaultEffect = () => chosenEffect?.name === DEFAULT_EFFECT;

const updateSlider = () => {
  if (isDefaultEffect()) {
    sliderContainer.classList.add('hidden');
    return;
  }

  effectSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });

  sliderContainer.classList.remove('hidden');
};

const onFormChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }

  chosenEffect = getSliderOptions(evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.classList.remove(`effects__preview--${chosenEffect.name}`)

  if (isDefaultEffect()) {
    effectLevel.value = '';
    image.style.filter = DEFAULT_EFFECT;
    return;
  }

  const sliderValue = effectSlider.noUiSlider.get();
  effectLevel.value = sliderValue;

  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
};

const resetEffects = () => {
  effectSlider.noUiSlider.destroy();
};

const createSlider = () => {
  chosenEffect = getSliderOptions(DEFAULT_EFFECT);

  noUiSlider.create(effectSlider, {
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
    connect: 'lower',
  });
};

export { resetEffects, onFormChange, onSliderUpdate, updateSlider,createSlider };
