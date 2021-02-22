import readlineSync from 'readline-sync';

const numbersOfRounds = 3;

export default (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);
  for (let i = 1; i <= numbersOfRounds; i += 1) {
    const [answer, question] = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    }
    if (answer !== userAnswer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
