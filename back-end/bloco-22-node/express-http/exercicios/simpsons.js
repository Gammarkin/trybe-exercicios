const express = require('express');
const bodyParser = require('body-parser');

const returnSimpsons = require('./returnSimpsons');
const addSimpson = require('./addSimpson');

const app = express();

app.use(bodyParser.json());

app.get('/simpsons', async (_req, res) => {
  const allSimpsons = await returnSimpsons();
  return res.status(200).json(allSimpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const {id} = req.params;

  const allSimpsons = await returnSimpsons();
  const selectedSimpson = allSimpsons.find((simpson) => simpson.id === id);

  if (!selectedSimpson)
    return res.status(404).json({message: 'simpson not found'});

  return res.status(200).json(selectedSimpson);
});

app.post('/simpsons', async (req, res) => {
  const {id, name} = req.body;

  const allSimpsons = await returnSimpsons();
  const idAlreadyInSimpsons = allSimpsons.some((simpson) => simpson.id === id);

  if (idAlreadyInSimpsons)
    return res.status(409).json({message: 'id already exists'});

  await addSimpson(id, name);
  return res.status(204).end();
});

app.listen(8080, () => {
  console.log('listening in port 8080');
});
