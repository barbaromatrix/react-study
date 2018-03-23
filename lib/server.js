import express from 'express';
import config from './config';
import serverRender from 'renderers/server';
import { data } from './testData';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  return res.render('index', { ...initialContent });
});

app.get('/data', async (req, res) => {
  return res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
});
