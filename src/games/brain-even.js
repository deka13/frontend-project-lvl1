import { runGame, getRandomInt } from '../index.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const min = 1;
const max = 30;

const gameData = () => {
  const question = getRandomInt(min, max);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => runGame(task, gameData);
