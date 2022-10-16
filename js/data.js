import {getRandomArrayElement} from './util.js';
import { getRandomNumber} from './util.js';

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

const DESCRIPTIONS = [
  'day for surfing #simplelife',
  'Cool summer evening',
  'The right place at the right time.. #stars #milkymay',
  'Into the highlands #hiking #cradlemountain',
  'Summer storm over #hobart',
  'Footprints..',
  'Beach walk #brunyisland',
  'A day on the train #westcoasttasmania',
  'The days are getting shorter',
  'This way',
  'Shadows #weekwnd',
  'Just now #sundog #solarhalo',
  'Its on #surf',
  'Last days of winter',
  'Flotsam and jetsam',
  'Emerging in the spring',
  'thru the studio window',
  'Wow',
  'Perfect conditions',
  '#rocks',
  'Love this city',
  'Avoiding the heat #pathway',
  '#wombat crossing the road',
  'Holiday',
  'Ancient coastline',
];
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

const pics = Array.from({ length: PICS_COUNT }, createPicDescription);
