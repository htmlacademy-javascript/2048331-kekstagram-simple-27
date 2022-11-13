import { isEscapeKey } from './util.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const closeModal = () => {
  document.querySelector('.success').remove();
};

const onBackdropClick = (evt) => {
  if (
    evt.target.closest('.success__inner') &&
    !evt.target.classList.contains('success__button')
  ) {
    return;
  }
  document.querySelector('.success').remove();
};

const showSuccess = () => {
  const successElement = successTemplate.cloneNode(true);
  document.body.append(successElement);
  successElement.addEventListener('click', onBackdropClick);
  document.addEventListener('keydown', onEscKeydown);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

export { showSuccess };
