import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const min = 1;
const max = 71;

const gameData = () => {
  const question = getRandomInt(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => runGame(task, gameData);
