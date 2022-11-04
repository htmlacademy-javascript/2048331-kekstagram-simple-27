function getRandomNumber(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }

  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

function checkStringLength(string, length) {
  return string.length <= length;
}

getRandomNumber(-1, 0);
checkStringLength('', 140);

const getRandomArrayElement = (elements) =>
  elements[getRandomNumber(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomArrayElement, getRandomNumber, isEscapeKey};
