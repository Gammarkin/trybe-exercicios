const QUESTIONS = [
  'What is your name?',
  'What is your favorite food?',
  'What is your favorite color?',
  'What is your favorite animal?',
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n${QUESTIONS[i]} \n`);
  process.stdout.write(' > ');
};

ask();

const answers = [];

process.stdin.on('data', (data) => {
  answers.push(data.toString().trim());
  if (answers.length < QUESTIONS.length) {
    ask(answers.length);
  } else {
    const [name, food, color, animal] = answers;
    process.stdout.write(`\n\nHello ${name}!\n`);
    process.stdout.write(`Your favorite food is ${food}.
your favorite color is ${color},
and your favorite animal is ${animal}.\n`);
    process.exit();
  }
});
