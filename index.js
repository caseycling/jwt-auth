const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import routes
const authRoute = require('./routes/auth');

const PORT = 3000;

dotenv.config();

//Connect to db
mongoose.connect(
  `mongodb+srv://casey:123abc@cluster0.ycufd.mongodb.net/awt?retryWrites=true&w=majority`,
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

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
