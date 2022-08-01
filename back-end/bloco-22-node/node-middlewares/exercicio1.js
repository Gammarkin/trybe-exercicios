const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routerEx1 = require('./routerEx1');
const routerEx2 = require('./routerEx2');

app.use('/signup', routerEx2);

app.use((req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization || authorization.length != 16)
    return res.status(401).json({message: `Token ${authorization}!`});

  next();
});

app.use('/sales', routerEx1);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
