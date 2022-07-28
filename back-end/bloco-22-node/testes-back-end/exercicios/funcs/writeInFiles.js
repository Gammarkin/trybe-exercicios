const fs = require('fs').promises;

const writeInFiles = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    return 'ok';
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = writeInFiles;
