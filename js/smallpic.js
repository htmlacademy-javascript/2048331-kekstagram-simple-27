//import { pics } from './data.js'; удаляю массив

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

//const pictures = pics; теперь вместо этого массива используется массив с сервера, а pictures объявлена в параметре функции
const bigPicture = document.querySelector('.big-picture');

const renderPictures = (pictures) => {
  const pictureFragment = document.createDocumentFragment();

  pictures.forEach(({ id, url, likes, comments }) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.dataset.id = id;
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments;
    newPicture.addEventListener('click', () => {
      bigPicture.classList.remove('hidden');
    });
    pictureFragment.appendChild(newPicture);

    picturesContainer.appendChild(pictureFragment);
  });
};

export { renderPictures };
