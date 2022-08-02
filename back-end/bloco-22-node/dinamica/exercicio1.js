const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const exe1 = require('./exe1');

app.use('/user', exe1);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
