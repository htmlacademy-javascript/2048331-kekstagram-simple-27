const PICS_COUNT = 25;
let idCount = 1;
const LIKES_COUNT = {
  min: 15,
  max: 200,
};
const COMMENTS_COUNT = {
  min: 0,
  max: 200,
};

const DESCRIPTIONS = ['day for surfing #simplelife', 'Cool summer evening', 'The right place at the right time.. #stars #milkymay', 'Into the highlands #hiking #cradlemountain', 'Summer storm over #hobart', 'Footprints..', 'Beach walk #brunyisland', 'A day on the train #westcoasttasmania', 'The days are getting shorter', 'This way', 'Shadows #weekwnd', 'Just now #sundog #solarhalo', 'Its on #surf', 'Last days of winter', 'Flotsam and jetsam', 'Emerging in the spring', 'thru the studio window', 'Wow', 'Perfect conditions', '#rocks', 'Love this city', 'Avoiding the heat #pathway', '#wombat crossing the road', 'Holiday', 'Ancient coastline'];

function getRandomNumber(a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }

  const min = Math.ceil(Math.min (a, b));
  const max = Math.floor(Math.max (a, b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

getRandomNumber (-1, 0);
checkStringLength ('', 140);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const createPicDescription = () => {
  const newId = idCount++;

  return {
    id: newId,
    url: `photos/${newId}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(LIKES_COUNT.min, LIKES_COUNT.max),
    comments: getRandomNumber(COMMENTS_COUNT.min, COMMENTS_COUNT.max),
  };
};

const getPics = Array.from({length: PICS_COUNT}, createPicDescription);

getPics();
