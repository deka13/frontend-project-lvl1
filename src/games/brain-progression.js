import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What number is missing in the progression?';

const progressionMin = 5;
const progressionMax = 9;
const minStep = 3;
const maxStep = 9;
const minFirstNum = 0;
const maxFirstNum = 50;

const gameData = () => {
  const progressionLength = getRandomInt(progressionMin, progressionMax);
  const step = getRandomInt(minStep, maxStep);
  const firstNum = getRandomInt(minFirstNum, maxFirstNum);
  const arr = [firstNum];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(firstNum + step * i);
  }
  const randomIndex = getRandomInt(0, arr.length - 1);
  const answer = String(arr[randomIndex]);
  arr[randomIndex] = '..';
  const question = `${arr.join(' ')}`;
  return [answer, question];
};

export default () => runGame(task, gameData);
