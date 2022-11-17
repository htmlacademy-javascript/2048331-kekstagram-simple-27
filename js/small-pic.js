const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach(({ url, likes, comments }) => {
    const newPicture = pictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__img').src = url;
    newPicture.querySelector('.picture__likes').textContent = likes;
    newPicture.querySelector('.picture__comments').textContent = comments;

    fragment.appendChild(newPicture);
  });
  picturesContainer.appendChild(fragment);
};

export { renderPictures };
