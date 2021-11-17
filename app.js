import express from 'express';

const app = express();
const port = 5000;
app.get('/name', (req, res) => {
  res.json({name: 'Premnath'});
});

app.listen(port, () => {
  console.log(`listen on http://localhost:${port}`);
});