import { runGame, getRandomInt } from '../index.js';

const task = 'What number is missing in the progression?';

const progressionMin = 5;
const progressionMax = 10;
const minStep = 3;
const maxStep = 9;
const minFirstNum = 0;
const maxFirstNum = 50;

const gameData = () => {
  const progressionLength = getRandomInt(progressionMin, progressionMax);
  const step = getRandomInt(minStep, maxStep);
  const firstNum = getRandomInt(minFirstNum, maxFirstNum);
  const arr = [];
  for (let i = firstNum; i < progressionLength; i += step) {
    arr.push(i);
  }
  const randomIndex = getRandomInt(0, arr.length - 1);
  const answer = String(arr[randomIndex]);
  arr[randomIndex] = '..';
  const question = `${arr.join(' ')}`;
  return [answer, question];
};

export default () => runGame(task, gameData());
