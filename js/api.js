import { renderPictures } from './small-pic.js';
import { showAlert } from './util.js';
import { showSuccess } from './success-modal.js';
import { showError } from './error-modal.js';
import { closeUserModal } from './form.js';

const getData = () => {
  fetch(' https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    })
    .catch(() => {
      showAlert('Ошибка при загрузке данных с сервера');
    });
};

const sendData = (body) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        showSuccess();
        closeUserModal();
        return;
      }
      showError();
    })
    .catch(() => {
      showError();
    });
};

export { getData, sendData };
