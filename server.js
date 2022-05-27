const mongoose = require('mongoose');

// Import dotenv in order to connect to our database
const dotenv = require('dotenv');

// Use dotenv to connect our config file
dotenv.config({
  path: './config.env',
});

// console.log(process.env);

//Import express application
const app = require('./app');

// Create a variable to represent our data
const productsDB = mongoose
  .connect(process.env.DATABASE.replace('<password>', process.env.PASSWORD))
  .then(() => {
    console.log('Database up and running');
  });

mongoose.connection.once('open', () => console.log('Connected to Mongo!'));

const port = 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}...`);
});
