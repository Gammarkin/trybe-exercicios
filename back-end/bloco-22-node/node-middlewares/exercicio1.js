const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routerEx1 = require('./routerEx1');

app.use('/sales', routerEx1);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
