import { renderPictures } from './small-pic.js';
import { showAlert } from './util.js';

const RequestUrl = {
  GET: 'https://27.javascript.pages.academy/kekstagram-simple/data',
  POST: 'https://27.javascript.pages.academy/kekstagram-simple',
};

const getData = () => {
  fetch(RequestUrl.GET)
    .then((response) => response.json())
    .then((pictures) => {
      renderPictures(pictures);
    })
    .catch(() => {
      showAlert('Ошибка при загрузке данных с сервера');
    });
};

const sendData = (body, onSuccess, onFail) => {
  fetch(RequestUrl.POST, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData };
