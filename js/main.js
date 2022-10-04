function getRandomNumber(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }

  const min = Math.ceil(Math.min (a, b));
  const max = Math.floor(Math.max (a, b));
  const result = Math.random() * (max - min) + min;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomNumber (-1, 0);
checkStringLength ('', 140);
