const sliderContainer = document.querySelector('.effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');

let handleSlideVolumeUpdate = null;

const setSliderUpdate = (onUpdate) => {
  handleSlideVolumeUpdate = onUpdate;
};

const onEffectSliderUpdate = ([volume]) => {
  effectLevel.value = volume;

  handleSlideVolumeUpdate?.(volume);
};

const createSlider = (options) => {
  const { min, max, step } = options;

  noUiSlider.create(effectSlider, {
    range: {
      min,
      max,
    },
    start: max,
    step,
    connect: 'lower',
  });

  effectSlider.noUiSlider.on('update', onEffectSliderUpdate);
};

const destroySlider = () => {
  effectSlider.noUiSlider.off('update');
  effectSlider.noUiSlider.destroy();

  effectLevel.value = '';
};

const resetSlider = () => {
  effectSlider.noUiSlider.reset();
};

const updateSlider = ({ min, max, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      min,
      max,
    },
    step: step,
    start: max,
  });

  effectLevel.value = max;
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

export {
  setSliderUpdate,
  createSlider,
  destroySlider,
  resetSlider,
  updateSlider,
  hideSlider,
  showSlider,
};
