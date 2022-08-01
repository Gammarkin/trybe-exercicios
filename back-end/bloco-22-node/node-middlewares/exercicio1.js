const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routerEx1 = require('./routerEx1');
const routerEx2 = require('./routerEx2');

app.use('/sales', routerEx1);

app.use('/signup', routerEx2);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
