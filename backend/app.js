const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
import userRouter from './routes/apiRoutes'
const port = 3000;

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