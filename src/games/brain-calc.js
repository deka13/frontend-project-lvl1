import runGame from '../index.js';
import getRandomInt from '../utils.js';

const task = 'What is the result of the expression?';

const min = 1;
const max = 10;
const operators = ['+', '-', '*'];
const firstOperator = 0;
const lastOperator = operators.length - 1;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;

    case '-':
      return num1 - num2;

    case '*':
      return num1 * num2;

    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const gameData = () => {
  const operator = operators[getRandomInt(firstOperator, lastOperator)];
  const num1 = getRandomInt(min, max);
  const num2 = getRandomInt(min, max);
  const answer = String(calculate(num1, num2, operator));
  const question = `${num1} ${operator} ${num2}`;
  return [answer, question];
};

export default () => runGame(task, gameData);
