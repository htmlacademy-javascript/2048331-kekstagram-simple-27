const effectList = document.querySelector('.effects__list');

let currentEffect = '';
let handleChange = null;

const setEffectChange = (onUpdate) => {
  handleChange = onUpdate;
};

const updateEffect = (effect) => {
  const previousEffect = currentEffect;
  currentEffect = effect;

  handleChange?.(previousEffect, currentEffect);
};

const setCurrentEffect = (effect) => {
  updateEffect(effect);
};

const getCurrentEffect = () => currentEffect;

effectList.addEventListener('change', (evt) => {
  evt.preventDefault();

  updateEffect(evt.target.value);
});

export { setEffectChange, setCurrentEffect, getCurrentEffect };
