import { isEscapeKey } from './util.js';

const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');

const showSuccess = () => {
  const successFragment = document.createDocumentFragment();
  const successElement = successTemplate.cloneNode(true);
  const button = document.querySelector('.success__button');

  successFragment.appendChild(successElement);
  document.body.append(successFragment);
  button.addEventListener('click', closeSuccess);
  document.addEventListener('keydown', onEscDown);
};

function onEscDown(evt) {
  if (isEscapeKey(evt)) {
    closeSuccess();
  }
}

function closeSuccess() {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onEscDown);
}

export { showSuccess };
