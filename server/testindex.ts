import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import router = require('./router');
import connection = require('./tests/models/testindex');

const app = express();
const PORT: number = 3002;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})
app.use(router);

(async function () {
  try {
    await connection;
    console.log('Connected to database 🗄'); // eslint-disable-line no-console
    const server = app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT} 🚀 `); // eslint-disable-line no-console
    });
  } catch (error) {
    console.log('Error:', error); // eslint-disable-line no-console
  }
})();

export = app
