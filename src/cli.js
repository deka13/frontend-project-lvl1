import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
};
