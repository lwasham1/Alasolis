const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  console.log("User connected.");
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 