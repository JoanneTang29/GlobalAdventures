// Import dotenv in order to connect to our database
const dotenv = require('dotenv');

// Use dotenv to connect our config file
dotenv.config({
  path: './config.env',
});

console.log(process.env);

//Import express application
const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`server started on port ${port}...`);
});
