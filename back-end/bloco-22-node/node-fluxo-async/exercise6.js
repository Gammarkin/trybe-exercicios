const fs = require('fs').promises;

const askQuestion = () => {
  process.stdout.write('Qual arquivo deseja ler?\n');
  process.stdout.write('  >  ');
};

askQuestion();

process.stdin.on('data', (data) => {
  try {
    const readFiles = async () => {
      const trimmedData = data.toString().trim();
      const fileContent = await fs.readFile(trimmedData, 'utf8');

      console.log('File Content: ');
      console.log(fileContent);
      process.exit();
    };

    readFiles();
  } catch (error) {
    console.log('Arquivo inexistente');
    process.exit();
  }
});
