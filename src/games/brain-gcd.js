import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const min = 3;
const max = 100;

const gameData = () => {
  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [answer, question];
};

export default () => runGame(task, gameData);
