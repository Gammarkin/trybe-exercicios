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

const createNewReducedFile = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);
  const MAX_LENGHT_OF_CHARS = 4;

  const filteredChars = charsArr.slice(0, MAX_LENGHT_OF_CHARS);
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredChars));
};

const addNelsonToFamily = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);

  charsArr.push({id: '5', name: 'Nelson Muntz', yimsw: '1'});
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(charsArr));
};

const changeNelsonForMaggie = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const charsArr = JSON.parse(fileContent);
  charsArr[4].name = 'Maggie Simpson';
  charsArr[4].yimsw = '0';

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(charsArr));
};

const main = () => {
  readChars();
  filterCharsById(1);
  removeChars(10, 6);
  createNewReducedFile();
  addNelsonToFamily();
  changeNelsonForMaggie();
};

main();
