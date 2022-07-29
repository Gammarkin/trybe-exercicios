const fs = require('fs').promises;

const returnSimpsons = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf8');
  return JSON.parse(fileContent);
};

module.exports = returnSimpsons;
