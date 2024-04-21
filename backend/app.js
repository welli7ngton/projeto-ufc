import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const app = express();
import path from 'path';
import bodyParser from 'body-parser';
import userRouter from "./routes/userRoutes.js";
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
  console.log(`App running in : http://localhost:3000/`);
  console.log(`CTRL + C to cancel`);
})