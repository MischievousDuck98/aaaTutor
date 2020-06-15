const express = require('express');
require('dotenv').config();
const app = express(); 

const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { passport } = require('./middlewares/passport');
const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRoutes);

app.get('/', (_, res) => {
  res.send({ ok: true });
})

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (error) =>  {
  if (error) {
    console.error('Mongoose failed to connect!', error);
    return;
  }
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Serving on:${port}`));

});


