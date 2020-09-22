const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const PORT = 3000;

dotenv.config();

//Connect to db
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      throw err;
    }
    console.log('Succesfully connected to DB');
  }
);

//Middleware
app.use(express.json());

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
