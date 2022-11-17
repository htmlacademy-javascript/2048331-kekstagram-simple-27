import { isEscapeKey } from './util.js';

const MessageType = {
  SUCCESS: 'success',
  ERROR: 'error',
};

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');

const closeMessage = () => {
  const message = document.querySelector('.success') || document.querySelector('.error');
  if (message === null) {
    return;
  }

  message.remove();
  document.removeEventListener('keydown', onEscKeydown);
};

const onMessageClick = (evt) => {
  const target = evt.target;

  if (
    target.closest('.success__inner') && !target.classList.contains('success__button')
    ||
    target.closest('.error__inner') && !target.classList.contains('error__button')
  ) {
    return;
  }

  closeMessage();
};

const showMessage = (type) => {
  const messageTemplate = type === MessageType.SUCCESS
    ? successTemplate
    : errorTemplate;

  const message = messageTemplate.cloneNode(true);

  document.body.append(message);

  message.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onEscKeydown);
};

const showErrorMessage = () => {
  showMessage(MessageType.ERROR);
};

const showSuccessMessage = () => {
  showMessage(MessageType.SUCCESS);
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt) ) {
    evt.preventDefault();
    closeMessage();
  }
}

export { showErrorMessage, showSuccessMessage };
