
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () =>
  console.log(`Example app listening on port 3000!`),
);