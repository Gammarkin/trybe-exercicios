const express = require('express');
const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({message: 'pong'});
});

app.listen(8080, () => {
  console.log('listening on port 8080');
});
