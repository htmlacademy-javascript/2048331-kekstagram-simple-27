import { renderPictures } from './smallpic.js';
import './bigpic.js';
import './form.js';

//получаем данные с сервера: получаем объект ответа и извлекаем данные методом json
fetch(' https://27.javascript.pages.academy/kekstagram-simple/data').then(
  (response) =>
    response.json().then((pictures) => {
      renderPictures(pictures);
    })
);
