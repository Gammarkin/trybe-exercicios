const fs = require('fs').promises;

const readChars = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);
  const nameID = simpsons.map(({id, name}) => `${id} - ${name}`);

  nameID.forEach((string) => console.log(string));
};

const filterCharsById = async (charId) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);

  const findedChar = charsArr.find(({id}) => Number(id) === charId);
  if (!findedChar) throw new Error('id não encontrado');

  const {id, name, yimsw} = findedChar;
  console.log(`${id} - ${name}. WISIT: ${yimsw}`);
};

const removeChars = async (...charId) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);

  const filteredChars = charsArr.filter(({id}) => !charId.includes(Number(id)));

  await fs.writeFile('./simpsons.json', JSON.stringify(filteredChars));
};

const main = () => {
  // readChars();
  // filterCharsById(1);
  // removeChars(10, 6);
};

main();
