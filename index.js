const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = `mongodb+srv://casey:123abc@cluster0.ycufd.mongodb.net/awt?retryWrites=true&w=majority`;

//Connect to db
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
  console.log('Connected to DB!')
);

//Import routes
const authRoute = require('./routes/auth');

//Middleware
app.use('/api/user', authRoute);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));
