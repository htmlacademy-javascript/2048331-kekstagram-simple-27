import { isEscapeKey, removeElementBySelector } from './util.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const onBackdropClick = (evt) => {
  if (
    evt.target.closest('.success__inner') &&
    !evt.target.classList.contains('success__button')
  ) {
    return;
  }
  removeElementBySelector( '.success' );
  document.removeEventListener( 'keydown', onEscKeydown );
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
    onBackdropClick(evt);
  }
}

export { showSuccess };
