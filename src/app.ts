import express from 'express';

const app = express();
app.disable("x-powered-by");

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;