import readlineSync from 'readline-sync';

// eslint-disable-next-line import/prefer-default-export
export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
};
