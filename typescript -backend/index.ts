import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();

app.use(cors());
app.use('/', router);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Online na porta: ${PORT}`);
});
