const fs = require('fs').promises;
const returnSimpsons = require('./returnSimpsons');

const addSimpson = async (id, name) => {
  const allSimpsons = await returnSimpsons();
  const newSimpsonsArray = [
    ...allSimpsons,
    {
      id,
      name,
    },
  ];

  await fs.writeFile('./simpsons.json', JSON.stringify(newSimpsonsArray));

  return;
};

module.exports = addSimpson;
