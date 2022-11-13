import { isEscapeKey } from './util.js';

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');

const closeModal = () => {
  document.querySelector('.error').remove();
};

const onBackdropClick = (evt) => {
  if (
    evt.target.closest('.error__inner') &&
    !evt.target.classList.contains('error__button')
  ) {
    return;
  }
  document.querySelector('.error').remove();
};

const showError = () => {
  const errorElement = errorTemplate.cloneNode(true);
  document.body.append(errorElement);
  errorElement.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeydown);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

export { showError };
